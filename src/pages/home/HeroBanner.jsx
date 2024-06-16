import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.scss";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../components/lazyLoadImage/Img";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.background +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="bg-img">
          <Img src={background} />
        </div>
      )}
    <div className="opacity_layer"></div>
      <ContentWrapper>
        <div className="herBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, TV Shows and People to Discover. Explore Now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie or TV Show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;