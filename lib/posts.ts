import axios from 'axios'

export const getPosts = async (limit: number) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    return res.data
  }catch(err) {
    console.log(err)
  }
}

export const getPostId = async (limit: number) => {
  try {
    const posts = await getPosts(limit)
    return posts.map((post: any) => {
      return {
        params: {
          postId: `${post.id}`
        }
      }
    })
  }catch(err) {
    console.log(err)
  }
}

export const getPostById = async (id: string) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data
  }catch(err) {
    console.log(err)
  }
}