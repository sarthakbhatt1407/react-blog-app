import { Link, Outlet } from "react-router-dom";
import "./navigation.scss";
const Navigation = () => {
  let a = 0;
  const change = (e) => {
    const nav = document.querySelector(".nav-link-container");
    const container = e.target.closest(".container");
    container.classList.toggle("change");

    if (a === 0) {
      nav.style.display = "flex";
      a = 1;
    } else if (a === 1) {
      nav.style.display = "none";
      a = 0;
    }
    console.log(nav);
  };
  return (
    <div className="main-box">
      <div className="img-logo">
        <Link className="img" to="/home" />
        <div className="btn">
          <div className="container" onClick={change}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div className="nav-link-container">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/bollywood">
          Bollywood
        </Link>
        <Link className="nav-link" to="/technology">
          Technology
        </Link>
        <Link className="nav-link" to="/hollywood">
          Hollywood
        </Link>
        <Link className="nav-link" to="/fitness">
          Fitness
        </Link>
        <Link className="nav-link" to="/food">
          Food
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Navigation;
