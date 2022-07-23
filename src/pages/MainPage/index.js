import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        id="Hm"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romace Movies"
        id="Rm"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        id="Dm"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default MainPage;
