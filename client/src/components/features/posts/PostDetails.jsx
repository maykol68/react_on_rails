import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../../constants";
function PostDetails() {
    const [post, setPost] = useState(null);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if(response.ok) {
                    const json = await response.json();
                    setPost(json);
                } else {
                    throw response; 
                }
            } catch (e) {
                console.log("An error ocurred:", e); 
            }
        };
        fetchCurrentPost();
    }, [id]);

    const deletePost = async (id) => {
        try {
          // DELETE request to: http://localhost:3000/api/v1/posts/:id
          const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
          });
    
          if(response.ok) {
            setPosts(posts.filter((post) => post.id !== id ));
          } else {
            throw response;
            }
        } catch (error) {
            console.error(error);
        }
      }

    if (!post) return <h2>Loading..</h2>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/">Back to Posts</Link>
            {" | "}
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    );
}

export default PostDetails;