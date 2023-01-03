import { Link, useNavigate } from 'react-router-dom'
import './card.css'

function Card({movie}) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/summary', {
      state: {movie}
    })
  }
 
  return (
    <div className="cardContainer">
      <div className="cardWrapper">
        <div className="cardList">
          <div className="cardImgContainer">
            <img src= {movie.show.image ? movie.show.image.medium : 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" className="cardImg" />
            {/* <img src= {movie.show.image?.medium} alt="" className="cardImg" /> */}
          </div>
          <span className="cardListTitle">{movie.show.name}</span>
          <div className="cardListCategories">
            {movie.show.genres.map((item) => (
              <span className="cardListCategory">{item}</span>
            ))}
          </div>
          <span className="cardListRating">Rating: {movie.show.rating.average}</span>
          <button className="cardBtn" onClick = {handleClick}>Summary</button>
        </div>
      </div>
    </div>
  )
}

export default Card