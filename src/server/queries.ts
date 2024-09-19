import { db } from "./db";
import { posts } from './db/schema';

export async function getPosts() {
    const posts = await db.query.posts.findMany();

    return posts;
}