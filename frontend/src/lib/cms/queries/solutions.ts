/**
 * Query Giải pháp — bật khi CPT `solution` + ACF đã Show in GraphQL.
 */

export const SOLUTIONS_LIST_QUERY = /* GraphQL */ `
  query AllSolutions($first: Int = 50) {
    solutions(first: $first, where: { status: PUBLISH }) {
      nodes {
        databaseId
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        solutionFields {
          icon
          summary
          bullets
        }
      }
    }
  }
`;
