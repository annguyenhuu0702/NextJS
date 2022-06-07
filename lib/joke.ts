import axios from 'axios'


export const getRandomJoke = async () => {
  try {
    const res = await axios.get("https://api.chucknorris.io/jokes/random")
    return res.data
  }catch(err) {
    console.log(err)
  }
}