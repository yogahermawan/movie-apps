import React from 'react';
import styled from "styled-components";
import { img_300, unavailable } from "../components/config";
import RemoveFavourites from '../components/RemoveFavourites';

const Favourite = (props) => {
	return (
		<>
			<svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				className='bi bi-heart-fill'
				style={{ color: 'white' }}
				fill={props.fill}
				xmlns='http://www.w3.org/2000/svg'
				onClick={props.onClick}
			>
				<path
					fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
			{props.isShow ?
				<Fav>
					<ul className='m-2 p-2' style={{ listStyle: 'none' }}>
						{props.favourites.map((val) => {
							return (
								<li className='mb-3 li-hover'>
									<RemoveFavourites onClick={() => props.removeFavouriteMovie(val)} />
									<img
										src={
											val.poster_path ? `${img_300}/${val.backdrop_path}` : unavailable
										}
										className="img-fluid"
										alt={val.title}
										style={{ borderRadius: '10px', maxWidth: '80px', width: '100px', marginLeft: '10px' }}
									/>
									<span style={{ marginLeft: '10px' }}>
										{val.title}
									</span>
								</li>
							)
						}
						)}
					</ul>
				</Fav>
				: ''}
		</>
	);
};

const Fav = styled.div`
max-width: 80%;
position: absolute;
top: 90px;
font-size: medium;
background-color: #212529;
`;

export default Favourite;
