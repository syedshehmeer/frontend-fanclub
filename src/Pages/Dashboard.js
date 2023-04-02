import React, { useEffect, useState } from "react";
import "./CSS/Dashboard.css";
import Categories from "../Components/Dashboard-Slider";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchResults from "./DashboardSearch";

const TvIcons = React.memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      await axios
        .get("https://backend-fanclub.onrender.com/api/celebs")
        .then((resp) => {
          return setData(resp.data.celebrities);
        });
    };
    func();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="section-header" style={{ marginTop: "50px" }}>
        TV Icons
      </div>
      <Slider {...settings}>
        {data
          .filter((celeb) => celeb.category === "tv")
          .map((celeb) => {
            return (
              <div key={celeb.id}>
                <Col style={{ paddingBottom: "10px" }}>
                  <div className="card" style={{ marginLeft: "50px" }}>
                    <figure>
                      <LazyLoadImage
                        src={celeb.image}
                        alt="Hotel"
                        style={{ width: "400px", height: "250px" }}
                      />
                    </figure>

                    <div className="card-body">
                      <Link to={`/profile/view-as/${celeb.slug}`}>
                        <h3 className="card-title">{celeb.name}</h3>
                      </Link>
                      <p className="card-text">{celeb.bio}</p>
                    </div>
                  </div>
                </Col>
              </div>
            );
          })}
      </Slider>
    </div>
  );
});

const FilmIcons = React.memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      await axios
        .get("https://backend-fanclub.onrender.com/api/celebs")
        .then((resp) => {
          return setData(resp.data.celebrities);
        });
    };
    func();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="section-header" style={{ marginTop: "50px" }}>
        Film Icons
      </div>
      <Slider {...settings}>
        {data
          .filter((celeb) => celeb.category === "film")
          .map((celeb) => {
            return (
              <div key={celeb.id}>
                <Col style={{ paddingBottom: "10px" }}>
                  <div className="card" style={{ marginLeft: "50px" }}>
                    <figure>
                      <LazyLoadImage
                        src={celeb.image}
                        alt="Hotel"
                        style={{ width: "400px", height: "250px" }}
                      />
                    </figure>

                    <div className="card-body">
                      <Link to={`/profile/view-as/${celeb.slug}`}>
                        <h3 className="card-title">{celeb.name}</h3>
                      </Link>
                      <p className="card-text">{celeb.bio}</p>
                    </div>
                  </div>
                </Col>
              </div>
            );
          })}
      </Slider>
    </div>
  );
});
const Bloggers = React.memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      await axios
        .get("https://backend-fanclub.onrender.com/api/celebs")
        .then((resp) => {
          return setData(resp.data.celebrities);
        });
    };
    func();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="section-header" style={{ marginTop: "50px" }}>
        Bloggers
      </div>
      <Slider {...settings}>
        {data
          .filter((celeb) => celeb.category === "blogger")
          .map((celeb) => {
            return (
              <div key={celeb.id}>
                <Col style={{ paddingBottom: "10px" }}>
                  <div className="card" style={{ marginLeft: "50px" }}>
                    <figure>
                      <LazyLoadImage
                        src={celeb.image}
                        alt="Hotel"
                        style={{ width: "400px", height: "250px" }}
                      />
                    </figure>

                    <div className="card-body">
                      <Link to={`/profile/view-as/${celeb.slug}`}>
                        <h3 className="card-title">{celeb.name}</h3>
                      </Link>
                      <p className="card-text">{celeb.bio}</p>
                    </div>
                  </div>
                </Col>
              </div>
            );
          })}
      </Slider>
    </div>
  );
});
const Youtubers = React.memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      await axios
        .get("https://backend-fanclub.onrender.com/api/celebs")
        .then((resp) => {
          return setData(resp.data.celebrities);
        });
    };
    func();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="section-header" style={{ marginTop: "50px" }}>
        Youtubers
      </div>
      <Slider {...settings}>
        {data
          .filter((celeb) => celeb.category === "youtuber")
          .map((celeb) => {
            return (
              <div key={celeb.id}>
                <Col style={{ paddingBottom: "10px" }}>
                  <div className="card" style={{ marginLeft: "50px" }}>
                    <figure>
                      <LazyLoadImage
                        src={celeb.image}
                        alt="Hotel"
                        style={{ width: "400px", height: "250px" }}
                      />
                    </figure>

                    <div className="card-body">
                      <Link to={`/profile/view-as/${celeb.slug}`}>
                        <h3 className="card-title">{celeb.name}</h3>
                      </Link>
                      <p className="card-text">{celeb.bio}</p>
                    </div>
                  </div>
                </Col>
              </div>
            );
          })}
      </Slider>
    </div>
  );
});

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-arrow-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-arrow-left"></i>
    </div>
  );
};

export default function Dashboard() {
  return (
    <>
      <Categories />
      <SearchResults />
      <TvIcons />
      <FilmIcons />
      <Bloggers />
      <Youtubers />
    </>
  );
}
