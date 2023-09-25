import { API_URL } from "../../constants";

async function fetchAllPosts() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function fetchPost(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function createPost(postData) {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

async function updatePost(id, postData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function deletePost(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

  //check for HTTP error responses
  if (!response.ok) {
    try {
      const errorData = await response.json();
      throw new Error(errorDate.message || response.statusText);
    } catch (jsonError) {
      // if the error response body isn't JSON or doesn't exist
      throw new Error(response.statusText);
    }
  }

  // For "No Content" status
  if (response.status === 204) {
    return null;
  } else {
    return response.json();
  }
  } catch (error) {
    // Handle network errors or rethrow the error from above
  throw new Error(
    error.message || "An error ocurred while deleting the post. "
    );
  }
}

export { createPost, deletePost, fetchAllPosts, fetchPost, updatePost };