import Markdown from "react-markdown";
import { getPostById } from "~/server/queries";

export default async function PostPage({
    params: { id },
  }: {
    params: { id : number };
  }) {

    const post = await getPostById( id );

    return (
        <div className="w-full flex justify-center overflow-auto">
            <div className="h-full flex flex-col prose prose-sm md:prose-lg lg:prose-xl">
                <Markdown>{post?.content}</Markdown>
            </div>
        </div>
    );
}