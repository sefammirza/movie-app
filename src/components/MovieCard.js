
const IMG_API = 'https://image.tmdb.org/t/p/w1280'
const defaultImage = "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"


const MovieCard = () => {
    return(
        <div className="movie">
            <div>
                <h3>Title</h3>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
            </div>
        </div>
    )
}

export default MovieCard;