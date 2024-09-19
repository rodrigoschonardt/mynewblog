import { getPosts } from "~/server/queries";
import { PostCard } from "./_components/post-card";

export default async function HomePage() {

  const posts = await getPosts();

  return (
    <main className="">
      <div className="flex flex-col p-5 items-center">
        <h2 className="text-2xl font-bold">Últimas postagens</h2>
        <div className="flex gap-5">
          {
            posts.map((post) => (
              <PostCard name={post.name} date={post.createdAt} key={post.id}/>
            ))
          }
        </div>
      </div>
    </main>
  );
}