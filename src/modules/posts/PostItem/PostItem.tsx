import { Button } from 'antd';
import styled from 'styled-components';
import { useAppDispatch } from '../../../store/hooks/redux';
import { deletePosts } from '../PostsThunk';
import { IPost } from './../../../api/dto/IPosts';

interface IProps {
    post: IPost
}

const PostItem = ({post}: IProps) => {
    const dispatch = useAppDispatch()

    return (
        <Wrapper>
            <div>
                <h1>{post.title} </h1>
                <p>{post.body}</p>
            </div>
            <div style={{ marginLeft: 10 }}>
                <Button onClick={() => dispatch(deletePosts(post.id))}>Удалить</Button>
            </div>
        </Wrapper>
    )
}

export default PostItem

const Wrapper = styled.div`
    border: 1px solid #1890FF;
    padding: 10px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: space-between;
`
