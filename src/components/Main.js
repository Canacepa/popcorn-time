import moviesFromJson from "../data/movies.json";
import { useState } from "react";

import "./Main.css";

export default function Main() {
	const [moviesArr, setMoviesArr] = useState(moviesFromJson);

	const deleteMovie = (movieId) => {
		// const newList = moviesArr.filter( (movieDetails) => {
		//     if(movieDetails.id !== movieId){
		//         return true;
		//     } else {
		//         return false;
		//     }
		// });

		const newList = moviesArr.filter(
			(movieDetails) => movieDetails.id !== movieId
		);

		setMoviesArr(newList);
	};

	return (
		<div className="Main">
			<h1>We currently have {moviesArr.length} movies available</h1>
			{moviesArr.map((movieObj) => {
				return (
					<div key={movieObj.id} className="card">
						<div>
							{movieObj.imgURL 
								? <img src={movieObj.imgURL} alt={movieObj.title} /> 
								: <img src="https://dummyimage.com/182x268/aaaaaa/000000" />
							}
						</div>
						<div className="info">
							<h2>{movieObj.title}</h2>
							<h3>Year: {movieObj.year}</h3>
							<h3>Rating: {movieObj.rating}</h3>
                            
                            {movieObj.rating > 8 && <p className="badge">RECOMMENDED</p>}

							<p>
								<span>genre: </span>
								{movieObj.genres.map((movieGenre) => {
									return <span>{movieGenre} </span>;
								})}
							</p>
						<button
							onClick={() => {
								deleteMovie(movieObj.id);
							}}
						>
							Delete
						</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
