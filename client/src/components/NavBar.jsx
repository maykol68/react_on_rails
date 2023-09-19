// Posts list Link (Root Path) | link to Create New Post (Post Form)
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Posts List</Link>
      {" | "}
      <Link to="/new">Create New Post</Link>
    </nav>
  );
}

export default NavBar;