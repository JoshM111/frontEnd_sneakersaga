import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Review = (props) => {
  const [ sneakerReview, setSneakerReview ] = useState({});
  const [ oneCreator, setOneCreator ] = useState([]);
  const [ user, setUser ] = useState({});

  useEffect(() => {
    axios
      .get("http://18.117.145.31/user/")
      .then((res) => {
        console.log(res.data);
        getCreator(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  
  const getCreator = () => {
    axios
      .get("http://18.117.145.31/review/" + .creator)
      .then((res) => {
        console.log(res.data);
        let users = res.data;
        console.log(users);
        console.log(users.creator)
        let filteredUser = users.filter(y => y.creator === user.id);
        setOneCreator(filteredUser);
        console.log(filteredUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://18.117.145.31/review/")
      .then((res) => {
        console.log(res.data);
        setSneakerReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <label for="textarea">Leave a review: </label>
      <textarea
        id="textarea"
        cols="95"
        rows="10"
        placeholder="Leave your review here..."
      ></textarea>
      <br />
      <div className="container">
        <p>Reviews: 
          { 
            props.reviews ? props.reviews
            .map(x => 
              <li key={x.id}>{x.review} : {x.creator.first_name}{x.creator.last_name} </li>
              
            )
            :
            ''
          }
        </p>
        {/* <p> 
            {
              creator 
              .map(name => <li key={name.id}>{name.first_name}{name.last_name}</li>)
            }      
        </p> */}
      </div>
      <div className="invButtons">
        <button onSubmit={submitHandler} className="submitBtn">
          Submit Review
        </button>
        <button onClick={() => navigate("/index")} className="homeBtn">
          Return To All Sneakers
        </button>
      </div>
    </div>
  );
};

export default Review;
