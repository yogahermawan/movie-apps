import React from "react";
import { useRecoilValue } from 'recoil';
import { GenreData } from '../store';

const Genre = ({ genre, setGenre, setPage, value, setValue }) => {
  const { data } = useRecoilValue(GenreData);
  setGenre(data.genres);

  const CategoryAdd = (params) => {
    // console.log(genre.filter((g) => g.id === params.id ? "true": "false"));
    setValue([...value, params]);
    setGenre(genre.filter((g) => g.id === params.id));
    setPage(1);
  };

  const CategoryRemove = (params) => {
    setValue(value.filter((g) => g.id !== params.id));
    setGenre([...genre, params]);
    setPage(1);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12 d-flex flex-wrap">
            {value && //if value exist
              value.map((Val) => {
                const { id, name } = Val;
                return (
                  <>
                    <div className="m-2" key={id}>
                      <button
                        className="text-white px-4 py-2 text-center buttons"
                        onClick={() => CategoryRemove(Val)}
                      >
                        {name}
                      </button>
                    </div>
                  </>
                );
              })}

            {genre && //if genre exist
              genre.map((Gen) => {
                const { id, name } = Gen;
                return (
                  <>
                    <div className="m-2" key={id}>
                      <button
                        className="bg-dark text-white px-4 py-2 text-center button"
                        onClick={() => CategoryAdd(Gen)}
                      >
                        {name}
                      </button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
