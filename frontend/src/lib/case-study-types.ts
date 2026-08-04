/** Kiểu dữ liệu case study — dùng chung data + trang chi tiết */

export interface CaseStudyGalleryImage {
  src: string;
  caption: string;
}

export interface CaseStudyGallery {
  afterChallenges?: CaseStudyGalleryImage;
  afterSolutions?: [CaseStudyGalleryImage, CaseStudyGalleryImage];
  afterResults?: CaseStudyGalleryImage;
}

export interface CaseStudyProject {
  slug: string;
  name: string;
  stats: string;
  field?: string;
  image: string;
  gallery?: CaseStudyGallery;
  intro: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}
