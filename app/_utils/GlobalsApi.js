import { Await } from "react-router-dom";

const { gql, default: request } = require("graphql-request")

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/'+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+'/master'

const getAllCourseList = async ()=>{
    const query =gql`
    query MyQuery {
      blogs {
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            yotubeUrl
            shortDesc
          }
        }
        excerpt
        id
        slug
        title
        image {
          url
        }
        author {
          ... on Author {
            id
            name
            avatar {
              url
            }
          }
        }
        description {
          text
        }
        data
      }
    }
    
    `
    const result = await request(MASTER_URL,query);
    return result;
}
const getCourseById = async (courseId)=>{
  const query = gql`
  query MyQuery {
    blogs(where: {slug: "`+courseId+`"}) {
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
          yotubeUrl
          shortDesc
        }
      }
      excerpt
      id
      slug
      title
      image {
        url
      }
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      description {
        text
      }
      data
    }
  }
  
  `
  const result = await request(MASTER_URL,query);
  return result;
}

const getBanner = async ()=>{
  const query = gql`
  query MyQuery {
    sideBanners {
      banner {
        url
      }
      name
      url
    }
  }
  `
  const result = await request(MASTER_URL,query);
  return result;
}


export default {
    getAllCourseList,
    getCourseById,
    getBanner
}