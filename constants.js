export const GRAPHQL_API = 'https://sample-sample-production.enonic.net/site/preview/hmdb/draft/hmdb/api';



export const GET_DATA = `
{
  guillotine {
    query(contentTypes:"media:image") {
      displayName
      ... on media_Image {
        imageUrl(scale:"block(800,200)",type:absolute)
      }
    }
  }
}
 `;
