import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Review = (props) => {
  const [ sneakerReview, setSneakerReview ] = useState({});
  const [ oneCreator, setOneCreator ] = useState([]);
  const [ allUsers, setAllUsers ] = useState([]);

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
  
  
  const getCreator = (userObject) => {
    console.log(userObject);
    axios
      .get("http://18.117.145.31/review/")
      .then((res) => {
        console.log(res.data);
        let users = res.data;
        console.log(`${userObject.id}`);
        console.log(users);
        let filteredUser = users.filter(y => y.creator === userObject.id);
        setOneCreator(filteredUser);
        console.log(filteredUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const getUser = () =>{
  //   let user = allUsers.filter(y => y.id === `${y.props.review.creator}`);
  //     console.log(user);
  //   return user.first_name

  // }


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
        <ul>Reviews: 
          {/* <li>
          { 
            props.reviews ? props.reviews
            .map(x => 
              <li key={x.id}>
                {x.review}  
                Reviewed By: 
                {
                  getUser(x.creator)
                }
                </li>
              
            )
            :
            ''
          }
          </li> */}
          <li>
            { 
              props.reviews ? props.reviews
              .map(x => 
                <li key={x.id}>{x.review} Reviewed By: {x.creator}</li>
                
              )
              :
              ''
            }
          
          </li>
        </ul>
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
