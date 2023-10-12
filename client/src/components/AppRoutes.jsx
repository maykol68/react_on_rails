import PostsList from '../features/posts/PostsList';
import { Route, Routes } from "react-router-dom";
import PostDetails from '../features/posts/PostDetails';
import NewPostForm from '../features/posts/NewPostForm';
import EditPostForm from '../features/posts/PostEditForm';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/posts/:id/edit" element={<EditPostForm />} />
            <Route path="/new" element={<NewPostForm />} />
        </Routes>
    )
}

export default AppRoutes;