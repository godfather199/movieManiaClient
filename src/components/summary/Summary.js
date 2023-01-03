import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./summary.css";

function Summary() {
  const { state } = useLocation();
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [movieName, setMovieName] = useState(state.movie.show.name)
  // const [rating, setRating] = useState(state.movie.show.rating ? state.movie.show.rating.average : 1)
  const [showForm, setShowForm] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault()
    const user = {
        username,
        email,
        movieName
        // rating
    }
    localStorage.setItem('user_data', JSON.stringify(user))

    navigate('/checkout')
  }

  return (
    <div className="summaryContainer">
      <div className="summaryWrapper">
        <Link to = '/' style = {{textDecoration: 'none'}}>
          <span className="title">Movie Mania</span>
        </Link>
        <div className="summaryImgContainer">
          <img
            src={state.movie.show.image?.medium}
            alt=""
            className="summaryImg"
          />
        </div>
        <span className="summaryTitle">{state.movie.show.name}</span>
        <p className="summaryDesc">
          {state.movie.show.summary.replace(/(<([^>]+)>)/gi, "")}
        </p>
        <button className="summaryBtn" onClick={() => setShowForm(!showForm)}>
          Booking
        </button>
        {showForm && (
          <>
            {/* <span className="summaryBookingTitle">BookingTitle</span> */}
            <form onSubmit = {handleClick} className="summaryForm">
              <div className="summaryFormItems">
                <label>Username</label>
                <input type="text" className="summaryInput" value = {username} onChange = {e => setUsername(e.target.value)} required />
              </div>
              <div className="summaryFormItems">
                <label>Email</label>
                <input type="email" className="summaryInput" value = {email} onChange = {e => setEmail(e.target.value)} required />
              </div>
              <div className="summaryFormItems">
                <label>Movie Name</label>
                <input type="text" className="summaryInput" value = {movieName}  />
              </div>
              <button className="summaryCheckoutBtn" type = 'submit'>Chekout</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Summary;
