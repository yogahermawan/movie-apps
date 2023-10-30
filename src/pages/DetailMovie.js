import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { img_500, img_300, img_200, unavailable, unavailableLandscape } from "../components/config";
import Favourite from "../components/Favourites";

const DetailMovies = (props) => {
    const { id } = useParams();
    const [detail, setDetail] = useState([])
    const fetchDetail = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1a73a1e3de652a34b08d98af2ba25692`)
            .then((res) => {
                setDetail(res.data);
                console.log(res.data);
            })
            .catch((err) => alert(err))
    }

    useEffect(() => {
        fetchDetail();
    }, []);

    return (
        <><div className="container">
            <div className="row py-5 my-5">
                <div className="image-wrapper">
                    <img
                        src={
                            detail.backdrop_path ? `${img_500}/${detail.backdrop_path}` : unavailable
                        }
                        className="card-img-top pt-3 pb-0 px-3"
                        alt={detail.title}
                    />
                    <span>{detail.tagline}</span>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={
                                detail.poster_path ? `${img_300}/${detail.poster_path}` : unavailable
                            }
                            className="card-img-top pt-3 pb-0 px-3 img-fluid"
                            alt={detail.title}
                            style={{ width: '300px' }}
                        />
                    </div>
                    <div className="col-md-4 pt-4">
                        <h3>{detail.title}</h3>
                        <p>{detail.release_date}</p>
                        <button className="w-100 btn btn-secondary d-flex justify-content-evenly align-items-center">
                            <Favourite favourites={props.favourites} fill='red' className="mr-2" />
                            Add Favourite
                        </button>
                        {detail.genres &&
                            detail.genres.map((Gen) => {
                                const { id, name } = Gen;
                                return (
                                    <>
                                        <div className="m-2" key={id}>
                                            <span
                                                className="text-white px-3 py-2 text-center rounded-5"
                                                style={{ background: '#535353', fontSize: '12px' }}
                                            >
                                                {name}
                                            </span>
                                        </div>
                                    </>
                                );
                            })
                        }
                        <hr />
                        <p>{detail.overview}</p>
                        <div className="d-flex align-items-center gap-2">
                            ~
                            {detail.spoken_languages && detail.spoken_languages.map((v) => {
                                return (
                                    <>
                                        <span
                                            className="text-white px-3 py-2 text-center rounded-5"
                                            style={{ background: '#535353', fontSize: '12px' }}
                                        >
                                            {v.name}</span>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-md-4 pt-4">
                        <h5>production</h5>
                        {detail.production_companies &&
                            detail.production_companies.map((Gen) => {
                                const { id, name, logo_path } = Gen;
                                return (
                                    <>
                                        <div className="m-2 bg-dark rounded p-2 d-flex gap-3" key={id}>
                                            <img
                                                src={
                                                    logo_path ? `${img_200}/${logo_path}` : unavailableLandscape
                                                }
                                                className="img-fliud"
                                                alt={detail.title}
                                                style={{ width: '100px' }}
                                            />
                                            <span>{name}</span>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DetailMovies;