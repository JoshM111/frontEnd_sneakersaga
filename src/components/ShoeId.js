import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import Review from "./Review";

const ShoeId = (props) => {
  const [ sneaker, setSneaker ] = useState({});
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    axios
      .get("http://18.117.145.31/sneaker/" + props.sneaker_id)
      .then((res) => {
        console.log(res.data);
        setSneaker(res.data);
        setIsLoaded(true);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {
        sneaker.reviews && <Review sneaker={sneaker} />
      }
      
      </div>
  );
};

export default ShoeId;
