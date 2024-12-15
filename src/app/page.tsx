type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  }
  )

  const posts: Post[] =  await res.json()  

  return (
  <main>
  <ul>
    {
    posts.map((post: Post) => (
      <li key={post.id}>{post.title}</li>
    ))
    }

  </ul>
  <h1>پلتفرم تخصصی پزشکان</h1>
  
</main>
);
}
