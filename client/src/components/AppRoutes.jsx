import PostsList from './features/posts/PostsList';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import PostDetails from './features/posts/PostDetails';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/new " element={<h1>New Post form</h1>} />

        </Routes>
    )



}

export default AppRoutes;