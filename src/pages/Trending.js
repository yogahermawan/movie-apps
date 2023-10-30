import React from "react";
import { img_300, unavailable } from "../components/config";
import Pagination from "../components/Pagination";
import { TrendingMovie, Paginate } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';
import Card from '../components/Card';

const Trending = (props) => {
  const { data } = useRecoilValue(TrendingMovie);
  const [page, setPage] = useRecoilState(Paginate);

  return (
    <>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 mt-2 mb-4 fs-1 fw-bold head d-flex justify-content-center align-items-center">
            <i className="fas fa-fire mx-4 text-danger"></i>
            <h4 className="fs-2">Trending</h4>
            <i className="fas fa-fire mx-4 text-danger"></i>
          </div>
          {data.results.map((Val, key) => {
            return (
              <Card
                key={Val.id}
                value={Val}
                img_300={img_300}
                unavailable={unavailable}
                handleFavourites={props.handleFavourites}

              />
            );
          })}
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
};

export default Trending;
