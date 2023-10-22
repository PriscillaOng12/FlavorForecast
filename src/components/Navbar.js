import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../store/userSlice";
import "./navbar.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";


// function to get the navbar background image according to the season
const getSeason = (month) => {
  if (month >= 3 && month <= 5) {
    return 'https://images.unsplash.com/photo-1593955808003-93f6151e6028?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwc2Vhc29ufGVufDB8fDB8fHww';
  } else if (month >= 6 && month <= 8) {
    return 'https://media.cnn.com/api/v1/images/stellar/prod/210316134738-02-wisdom-project-summer.jpg?q=w_3568,h_2006,x_0,y_0,c_fill';
  } else if (month >= 9 && month <= 11) {
    return 'https://www.eventbrite.ie/blog/wp-content/uploads/2022/06/Autumn-event-ideas-1.jpg';
  } else {
    return 'https://c.tadst.com/gfx/600x337/winter-lake.jpg?1';
  }
};

// The Navigation bar of the Application
const Navbar = () => {
  const bookmarks = useSelector((state) => state.bookmark); // bookmark state
  const navigate = useNavigate();
  const user = useSelector(selectUser); // current user state

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed

  return (
    <div className="Navbar" style={{backgroundImage: `url('${getSeason(currentMonth)}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      {/* Home and Login Links */}
      <div className="left">
        <div className="nav-links">
          <Link to="/">Home</Link>
          |
          {user ? (
            <Link to="/Bookmark">Bookmarks</Link>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </div>
      </div>
      {/* Username and bookmarks display */}
      <div className="right">
        {user && "Welcome! " + user.name }

        {user ? (
          <Badge badgeContent={bookmarks.length} color="success">
            <BookmarkIcon style={{ color: "lightgreen" }} />
          </Badge>
        ) : (
          <LoginIcon
            style={{ fontSize: "30px" }}
            className="loginIcon"
            onClick={() => {
              navigate("/Login");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
