export default function SearchMoviesForm() {
    return (
        <form className="form">
            <label htmlFor="query" className="label">Movie Name</label>
            <input type="text" className="input" name="query" placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}