import { db } from "./db";

export async function getPosts() {
    const posts = await db.query.posts.findMany({
        orderBy : (model, {desc}) => desc(model.createdAt)
    });

    return posts;
}

export async function getPostById( id : number ) {
    return await db.query.posts.findFirst({
        where: (model, { eq }) => eq(model.id, id)
    });
}