/** Rating bài viết — lưu localStorage theo slug */

interface RatingAgg {
  sum: number;
  count: number;
}

const RATING_VOTE_PREFIX = 'tpg-blog-rating-vote:';
const RATING_AGG_PREFIX = 'tpg-blog-rating-agg:';

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatAvg(sum: number, count: number): string {
  if (count === 0) return '—';
  return (sum / count).toFixed(1).replace(/\.0$/, '');
}

function paintStars(root: HTMLElement, active: number) {
  root.querySelectorAll<HTMLElement>('[data-rating-star]').forEach((btn) => {
    const n = Number(btn.dataset.ratingStar);
    btn.classList.toggle('is-active', n <= active);
    btn.setAttribute('aria-pressed', n === active ? 'true' : 'false');
  });
}

function updateRatingLabel(el: HTMLElement | null, agg: RatingAgg, userVote: number | null) {
  if (!el) return;
  const avg = formatAvg(agg.sum, agg.count);
  const voteHint = userVote ? ` · Bạn chấm ${userVote}★` : '';
  el.textContent = `${avg}/5 — (${agg.count} bình chọn)${voteHint}`;
}

function initEngagement(root: HTMLElement) {
  if (root.dataset.bound === '1') return;
  root.dataset.bound = '1';

  const slug = root.dataset.postSlug?.trim();
  if (!slug) return;

  const voteKey = `${RATING_VOTE_PREFIX}${slug}`;
  const aggKey = `${RATING_AGG_PREFIX}${slug}`;

  const ratingRoot = root.querySelector<HTMLElement>('[data-rating-root]');
  const ratingLabel = root.querySelector<HTMLElement>('[data-rating-label]');
  let userVote = Number(localStorage.getItem(voteKey)) || null;
  if (userVote && (userVote < 1 || userVote > 5)) userVote = null;
  let agg = readJson<RatingAgg>(aggKey, { sum: 0, count: 0 });

  if (!ratingRoot) return;

  const avgPaint =
    userVote ?? (agg.count > 0 ? Math.round(agg.sum / agg.count) : 0);
  paintStars(ratingRoot, avgPaint);
  updateRatingLabel(ratingLabel, agg, userVote);

  ratingRoot.querySelectorAll<HTMLButtonElement>('[data-rating-star]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = Number(btn.dataset.ratingStar);
      if (!next || next < 1 || next > 5) return;

      if (userVote) {
        agg = { sum: agg.sum - userVote + next, count: agg.count };
      } else {
        agg = { sum: agg.sum + next, count: agg.count + 1 };
      }
      userVote = next;
      localStorage.setItem(voteKey, String(next));
      writeJson(aggKey, agg);
      paintStars(ratingRoot, next);
      updateRatingLabel(ratingLabel, agg, userVote);
    });

    btn.addEventListener('mouseenter', () => {
      paintStars(ratingRoot, Number(btn.dataset.ratingStar) || 0);
    });
  });

  ratingRoot.addEventListener('mouseleave', () => {
    paintStars(ratingRoot, userVote ?? 0);
  });
}

function boot() {
  document.querySelectorAll<HTMLElement>('[data-blog-engagement]').forEach(initEngagement);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

document.addEventListener('astro:page-load', boot);

export {};
