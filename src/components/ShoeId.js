import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import Review from "./Review";

const ShoeId = (props) => {
  const [ sneaker, setSneaker ] = useState({});
  const [ review, setReview ] = useState([]);


  useEffect(() => {
    axios
      .get("http://18.117.145.31/sneaker/" + props.sneaker_id)
      .then((res) => {
        console.log(res.data);
        setSneaker(res.data);
        console.log(res.data);
        getReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getReview = (sneakerObject) => {
    console.log(sneakerObject.id);
    axios
      .get("http://18.117.145.31/review/")
      .then((res) => {
        console.log(res.data);
        let reviews = res.data;
        console.log(sneakerObject);
        let filteredReviews = reviews.filter(x => x.sneaker_review === sneakerObject.id);
        setReview(filteredReviews);
        console.log(filteredReviews);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <h1>Shoe History</h1>
      <h2>
        {sneaker.brand} {sneaker.name}
      </h2>
      <img src={sneaker.img} alt={sneaker.name} />
      <p>
        Release Date:{" "}
        {new Date(sneaker.release_year).toLocaleDateString("en-us")}
      </p>
      <p>History: {sneaker.desc}</p>
      <p>{sneaker.shoe_review}</p>
      <Review reviews={review} sneaker={sneaker}/>
      </div>
  );
};

export default ShoeId;
