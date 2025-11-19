import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"

export default function MoviePage() {

    const { id } = useParams()

    const API_URL = `http://localhost:3000/api/movies/${id}`

    const [movie, setMovie] = useState({})



    useEffect(() => {

        axios.get(API_URL)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })

    }, [])


    return (
        <>
            <div className="hero bg-white py-10">
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
            <section className="bg-base-200 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
                    {movie.reviews?.map(review => (

                        <div className="card card-border bg-base-100">
                            <div className="card-body">
                                <span className="badge badge-xs badge-warning">{review.vote} {'★'.repeat(review.vote)}{'☆'.repeat(5 - review.vote)}</span>
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.text}</p>
                            </div>
                        </div>

                    ))}


                </div>
            </section>
        </>
    )


}