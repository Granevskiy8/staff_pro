import { useEffect } from "react"
import PostItem from "../../../modules/posts/PostItem/PostItem"
import { fetchPosts } from "../../../modules/posts/PostsThunk"
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux"
import { IPost } from './../../../api/dto/IPosts';
import { Button, Input, Form } from 'antd';
import { addNewPost } from './../../../modules/posts/PostsThunk';



const Reports = () => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm();
    const {posts, isLoading, error} = useAppSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const onFinish = (values: any) => {
        dispatch(addNewPost({...values, id: Date.now()}))
        form.resetFields();
    };

    return (
        <div>
            <Form layout="vertical"  onFinish={onFinish} form={form} >
                <Form.Item required={false} name='title' rules={[{ required: true, message: 'Title required' }]}>
                    <Input placeholder="Title"/>
                </Form.Item>
                <Form.Item required={false} name='body' rules={[{ required: true, message: 'Body required' }]}>
                    <Input placeholder="Body"/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType="submit">Add</Button>
                </Form.Item>
            </Form>

            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}

            {posts.map((post: IPost) => (
                <PostItem key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Reports