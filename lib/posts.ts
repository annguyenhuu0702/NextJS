import axios from 'axios'

export const getPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    return res.data
  }catch(err) {
    console.log(err)
  }
}

export const getPostId = async () => {
  try {
    const posts = await getPosts()
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