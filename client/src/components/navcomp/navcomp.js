import "./navcomp.css";
import SwipeableTemporaryDrawer from "../leftdrawer/leftdrawer";
const NavComp = ({ setCategory }) => {
  return (
    <>
      <div className="nav">
        <div className="nav_icon">
          <SwipeableTemporaryDrawer setCategory={setCategory} />
        </div>
        <img
          style={{ cursor: "pointer" }}
          height="80%"
          src="https://pbs.twimg.com/profile_images/627085479268126720/k4Wwj-lS.png "
          alt="logo"
        />
      </div>
    </>
  );
};

export default NavComp;
