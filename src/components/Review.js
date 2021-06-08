import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Review = (props) => {
  const [sneaker, setSneaker] = useState(props.sneaker);
  const [oneCreator, setOneCreator] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://18.117.145.31/user/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://18.117.145.31/review/")
      .then((res) => {
        console.log(res.data);
        setSneaker(res.data);
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
      <div>
        <table>
          <thead>
            <th>Review</th>
            <th>Reviewer</th>
          </thead>
          {sneaker.reviews.map((x) => (
            <tbody key={x.id}>
              <tr>
                <td>{x.review}</td>
                <td>{x.creator.first_name}</td>
              </tr>
            </tbody>
          ))}
        </table>
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
