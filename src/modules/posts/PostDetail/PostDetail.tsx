import {useParams} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { useEffect } from 'react';
import { fetchPost } from '../PostsThunk';

const PostDetail = () => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const {post} = useAppSelector(state => state.posts)

    useEffect(() => {
        id && dispatch(fetchPost(+id))
        
    }, [dispatch])

    return (
        <>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </>
    )
}

export default PostDetail