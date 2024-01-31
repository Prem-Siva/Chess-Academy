/* eslint-disable react/prop-types */

/* import { useState } from 'react';
 */
// eslint-disable-next-line react/prop-types

import image1 from "../assets/images/Feedback/user8.png";
import image2 from "../assets/images/Feedback/user7.png";
import image3 from "../assets/images/Feedback/user9.png";

const userList = [
  {
    username: "Pranesh",
    review:
      "Great place to learn",
    rating: "3",
    images: image1,
  },
  {
    username: "Priya ",
    review:
      "Learnt all minute nuances of the game",
    rating: "5",
    images: image2,
  },
  {
    username: "Pauly",
    review:
      "Friendly and patient instructors",
    rating: "4",
    images: image3,
  },
];
function Feedback() {
  return (
    <div className="feedback-container">
      <div className="site-container">
        <h2 className="feedback-heading">Customer FeedBacks</h2>
        <div className="article-container">
          {userList.map((user, index) => (
            <article key={index} className="article-card">
              <figure className="article-image">
                <img src={user.images} className="card-image" alt="user" />
              </figure>
              <div className="article-content1">
                <h3>{user.username}</h3>

                <p>&#11088;&#11088;&#11088;</p>
              </div>
              <div className="article-content">
                <p>{user.review}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
