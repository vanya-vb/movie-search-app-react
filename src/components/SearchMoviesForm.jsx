import { useState } from "react";

export default function SearchMoviesForm() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5967bedd342eedf0e85b9863de116b97&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input
                    type="text"
                    className="input"
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card-img"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                        />
                        <div className="card-content">
                            <h2 className="card-title">{movie.title}</h2>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card-desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}