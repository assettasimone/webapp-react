import { BrowserRouter, Routes, Route } from "react-router"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage";
import LoaderContext from "./Contexts/LoaderContext";
import { useState } from "react";

function App() {

  const [loading, setLoading] = useState(true)

  return (
    <>
      <LoaderContext.Provider value={{ loading, setLoading }}>
        <BrowserRouter>

          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<h1>movie page</h1>} />
              <Route path="/movie/:id" element={<MoviePage />} />
              <Route path="*" element={<h1>404 not Found</h1>}></Route>
            </Route>

          </Routes>
        </BrowserRouter>

      </LoaderContext.Provider>
    </>
  )
}

export default App
