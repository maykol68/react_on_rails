// Posts list Link (Root Path) | link to Create New Post (Post Form)
import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <link to= "/">Posts List</link>
            {" | "}
            <link to= "/new">New List</link>

        </nav>
    )
}

export default Navbar;