import { getPosts } from "~/server/queries";
import { PostCard } from "./_components/post-card";

export default async function HomePage() {

  const posts = await getPosts();

  return (
    <div className="flex flex-col p-3 items-center">
        <h3 className="text-2xl font-bold p-3">Últimas postagens</h3>
        <div className="flex gap-5 flex-wrap justify-center">
          {
            posts.map((post) => (
              <PostCard id={post.id} name={post.name} date={post.createdAt} key={post.id}/>
            ))
          }
        </div>
    </div>
  );
}