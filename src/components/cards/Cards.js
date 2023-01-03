import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./cards.css";

function Cards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );

        setMovies(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cardsContainer">
      <div className="cardsWrapper">
        <span className="cardsTitle">Movie Mania</span>
        <div className="cardsDetails">
          {movies.map((movie) => (
            <Card key={movie.show.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
