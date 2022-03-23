import { createAsyncThunk} from '@reduxjs/toolkit'
import { postsApi } from './../../api/posts/postsRequest';


export const fetchPosts = createAsyncThunk(
    'fetchPosts',
    async (_, thunkAPI) => {
        const response = await postsApi.getPosts()
        return response
    }
)

export const fetchPost = createAsyncThunk(
    'fetchPost',
    async (id: number, thunkAPI) => {
        const response = await postsApi.getPost(id)
        return response
    }
)

export const deletePosts = createAsyncThunk(
    'deleteposts',
    async (id: number, thunkAPI) => {
        const response = await postsApi.deletePost(id)
        return id
    }
)

export const addNewPost = createAsyncThunk(
    'addpost',
    async (body: string, thunkAPI) => {
        const response = await postsApi.postPost(body)
        return body
    }
)
