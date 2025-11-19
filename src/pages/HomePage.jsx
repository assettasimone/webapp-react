import { useState, useEffect, useContext } from "react"
import axios from "axios"
import MovieCard from "../components/MovieCard"
import LoaderContext from "../Contexts/LoaderContext"

export default function HomePage() {

    const API_URL = 'http://localhost:3000/api/movies'
    const [movies, setMovies] = useState([])
    const { setLoading } = useContext(LoaderContext)


    useEffect(() => {

        setLoading(true)
        axios.get(API_URL)
            .then(res => {
                console.log(res);
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
            .then(
                setLoading(false)
            )

    }, [])


    return (
        <>
            <div className="hero min-h-100">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold">Il cinema raccontato dagli spettatori, non dai critici.</h1>
                        <p className="py-6">
                            Dai classici intramontabili alle ultime uscite: leggi e scrivi recensioni sincere, nate da chi ama davvero il grande schermo.
                        </p>
                    </div>
                </div>
            </div>
            <section className="my-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">

                    {movies.map(movie => (
                        <MovieCard movie={movie} />

                    ))}



                </div>

            </section>


        </>
    )
}