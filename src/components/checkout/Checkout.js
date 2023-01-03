import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./checkout.css";

function Checkout() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user_data")));
  }, []);

  return (
    <div className="checkoutContainer">
        <Link to="/" style={{textDecoration: 'none'}}>
          <span className="title">Movie Mania</span>
        </Link>
      <div className="checkoutWrapper">
        <span className="checkoutTitle">Checkout Page</span>
        <span className="checkoutName">{user.username}</span>
        <span className="checkoutEmail">{user.email}</span>
        <span className="checkoutMovie">{user.movieName}</span>
        {/* <span className="checkoutRating">{user.rating}</span> */}
      </div>
    </div>
  );
}

export default Checkout;
