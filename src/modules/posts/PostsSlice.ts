import { createSlice } from '@reduxjs/toolkit';
import { IPosts } from '../../api/dto/IPosts';
import { deletePosts, fetchPosts, addNewPost, fetchPost } from './PostsThunk';


const initialState: IPosts = {
    posts: [],
    isLoading: false,
    error: '',
    post: {
        userId: 0,
        id: 0,
        title: '',
        body: '',
    },
}

export const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        [fetchPosts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPosts.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },


        [deletePosts.fulfilled.type]: (state, action) => {
            state.posts = state.posts.filter(e => e.id !== action.payload)
            state.isLoading = false;
        },
        [deletePosts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [deletePosts.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },


        [addNewPost.fulfilled.type]: (state, action) => {
            state.posts.unshift(action.payload)
        },
        
        [fetchPost.fulfilled.type]: (state, action) => {
            state.post = action.payload;
        },

        
    }
})