/** Query Tin tức — Post mặc định WordPress */

export const POSTS_LIST_QUERY = /* GraphQL */ `
  query AllBlogPosts($first: Int = 100) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        databaseId
        slug
        title
        date
        excerpt
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const POST_BY_SLUG_QUERY = /* GraphQL */ `
  query BlogPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId
      slug
      title
      date
      excerpt
      content
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;
