import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./homeTop.scss";
const HomeTop = () => {
  return (
    <div className="main-front-post-conatiner">
      <Link to="" className="front-post1 front-post">
        <h2>Title of vertical gallery</h2>
        <p>Travel/ August 21 2017</p>
      </Link>
      <Link to="" className="front-post2 front-post">
        <h2>
          <span>The Sound cloud</span>
          <span>You loved is doomed</span>
        </h2>
        <p>Travel/ August 21 2017</p>
      </Link>
      <Link to="" className="front-post3 front-post">
        <h2>
          <span>The Sound cloud</span>
          <span>You loved is doomed</span>
        </h2>
        <p>Travel/ August 21 2017</p>
      </Link>
    </div>
  );
};
export default HomeTop;
