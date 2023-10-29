import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { img_300, unavailable } from "../components/config";
import Card from '../components/Card';
import axios from 'axios'

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    )
      .then((res) => {
        setContent(res.data.results)
      })
      .catch((err) => alert(err))
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const Search = () => {
    fetchSearch();
  };

  const Trigger = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row pt-3 mb-5 pb-5">
          <div className="col-12 pt-5 pb-3 mt-5 d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholder="search..."
              onChange={Trigger}
              className="form-control-lg col-6 search bg-dark text-white border border-0"
            />
            <button
              className="btn btn-primary text-white mx-2 col-md-1 col-sm-2 py-2"
              onClick={Search}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          {
            content !== 'undefined' ?
              content.map((Val, key) => {
                return (
                  <Card
                    key={Val.id}
                    value={Val}
                    img_300={img_300}
                    unavailable={unavailable}
                    handleFavourites={props.handleFavourites}
                  />
                );
              }) : <div>Empty data</div>
          }
          {page > 1 && <Pagination page={page} setPage={setPage} />}
        </div>
      </div>
    </>
  );
};

export default Search;
