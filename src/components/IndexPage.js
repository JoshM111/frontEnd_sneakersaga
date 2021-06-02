// Show list of sneakers in database
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const AllSneakers = (props) => {
  const [allSneakers, setAllSneakers] = useState([]);

  useEffect(() => {
    axios
      .get("http://18.117.145.31/sneaker/")
      .then((res) => {
        console.log(res.data);
        setAllSneakers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>The Timeline</h1>
      <div className="container">
        {allSneakers.map((sneaker, index) => (
          <div key={index}>
            <Link to={`/sneakers/${sneaker.id}`}>
              <h3>
                {sneaker.brand} {sneaker.name}
              </h3>
              <img src={sneaker.img} alt={sneaker.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSneakers;
