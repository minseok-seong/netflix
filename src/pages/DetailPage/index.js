import axios from "../../api/axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setmovie] = useState({});

  useEffect(() => {
    fetchData();
  }, [movieId]);

  const fetchData = async () => {
    const request = await axios.get(`/movie/${movieId}`);
    setmovie(request.data);
  };

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  );
};

export default DetailPage;
