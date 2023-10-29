import Favourite from "../components/Favourites";

const Card = (props) => {
    const {
        name,
        title,
        poster_path,
        first_air_date,
        release_date,
        overview,
        id,
    } = props.value;
    return (
        <>
            <div
                key={id}
                className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4"
                id="card"
            >
                <div className="card bg-dark">
                    <img
                        src={
                            poster_path ? `${props.img_300}/${poster_path}` : props.unavailable
                        }
                        className="card-img-top pt-3 pb-0 px-3"
                        alt={title}
                    />
                    <div className="card-body d-flex justify-content-between flex-column" style={{ height: '255px' }}>
                        <div>
                            <h5 className="card-title text-center fs-5">
                                {title || name}
                            </h5>
                            <p style={{ fontSize: '10px', textAlign: 'justify' }}>{overview && overview.length ? overview.length > 100 ? (overview.slice(0, 100) + '...') : overview : ''}</p>
                        </div>
                        <div>
                            <button onClick={() => props.handleFavourites(props.value)} className="btn btn-secondary w-100">
                                <Favourite favourites={props.favourites} fill='red' className="mr-2" />
                                <span style={{ marginLeft: '10px' }}>
                                    Add To Favourite
                                </span>
                            </button>
                            <p style={{ fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>Release : {release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;