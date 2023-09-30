import { useState } from "react";

function PostForm() {
    const [ formData, setFormData ] = useState(
        post || {
            title: "",
            body: "",
        }
    );

    return (
        <div>
            

        </div>
    );
}

export default PostForm;