import React from "react";
import Favourite from "./Favourites";

const Header = (props) => {
  const [isShow, setisShow] = React.useState();
  const handleFavourites = () => {
    setisShow(!isShow);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center p-3 header">
            Movie Apps
          </div>
          <div className="col-12 header header1 bg-transparent fs-1 py-4 d-flex justify-content-end align-item-center position-fixed">
            <Favourite
              isShow={isShow}
              onClick={handleFavourites}
              favourites={props.favourites}
              removeFavouriteMovie={props.removeFavouriteMovie}
              fill='red'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
