import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"

export default function MoviePage() {

    const { id } = useParams()

    const API_URL = `http://localhost:3000/api/movies/${id}`

    const [movie, setMovie] = useState([])

    useEffect(() => {

        axios.get(API_URL)
            .then(res => {
                console.log(res);
                setMovie(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })

    }, [])


    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={`http://localhost:5173/img/${movie.image}`}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{movie.title}</h1>
                    <p className="py-6">
                        {movie.abstract}
                    </p>
                    <button className="btn btn-primary">Leave a reviews</button>
                </div>
            </div>
        </div>
    )


}