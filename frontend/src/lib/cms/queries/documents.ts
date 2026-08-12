/**
 * Query Tài liệu — bật khi CPT `document` + ACF đã Show in GraphQL trên VPS.
 * Tên root field (documents) phải khớp GraphQL Single/Plural Name của CPT.
 */

export const DOCUMENTS_LIST_QUERY = /* GraphQL */ `
  query AllDocuments($first: Int = 100) {
    documents(first: $first, where: { status: PUBLISH }) {
      nodes {
        databaseId
        slug
        title
        documentFields {
          meta
          docCategory
          coverType
          coverTitle
          cover {
            node {
              sourceUrl
              altText
            }
          }
          file {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
