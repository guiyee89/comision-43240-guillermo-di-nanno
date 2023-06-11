import { useFetch } from "../../hooks/useFetch"

export const Posts = () => {

    const [posts] = useFetch([], "https://jsonplaceholder.typicode.com/posts")
    console.log(posts)

  return (
    <div>Posts</div>
  )
}
