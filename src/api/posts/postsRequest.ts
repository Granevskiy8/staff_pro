import { get, post } from "../baseRequestAPI"
import { remove } from './../baseRequestAPI';

const ALL_POSTS = '/posts'

export const postsApi = {
    getPosts: (token?: string) => get(ALL_POSTS, token),

    deletePost: (id: number) => remove(`${ALL_POSTS}/${id}`),

    postPost: (body:string) => post(ALL_POSTS, body)

}