/**
 * Query Case study — bật khi CPT `case_study` + ACF đã Show in GraphQL.
 */

export const CASE_STUDIES_LIST_QUERY = /* GraphQL */ `
  query AllCaseStudies($first: Int = 100) {
    caseStudies(first: $first, where: { status: PUBLISH }) {
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
        caseStudyFields {
          clientName
          badge
          intro
          logo {
            node {
              sourceUrl
            }
          }
          metrics {
            value
            label
          }
        }
      }
    }
  }
`;
