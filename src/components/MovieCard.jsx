import { Link } from "react-router"

export default function MovieCard({ movie }) {


    return (

        <div className="card shadow-sm image-full group">
            <figure className="">
                <img className="brightness-100 group-hover:brightness-20 transition-all duration-300 ease-in-out"
                    src={`http://localhost:5173/img/${movie.image}`}
                    alt={movie.title} />
            </figure>
            <div className="card-body opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.abstract}</p>
                <div className="card-actions ">
                    <Link to={`/movie/${movie.id}`} className="btn btn-primary grow">See Reviews</Link>
                </div>
            </div>

        </div>
    )

}