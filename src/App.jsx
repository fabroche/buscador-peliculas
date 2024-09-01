import './App.css'
import {Layout} from "./components/Layout/index.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import MovieItem from "./components/MovieItem/MovieItem.jsx";
import NoSearchResults from "./components/NoSearchResults/NoSearchResults.jsx";
import useMovies from "./hooks/useMovies/useMovies.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";
import useSearch from "./hooks/useSearch/useSearch.jsx";
import React, {useState} from "react";

function App() {

    // States
    const {search, setSearch, searchError, isFirstInput} = useSearch()
    const [sort, setSort] = useState(false);
    const {movies, getMovies, loading} = useMovies({search, sort})

    //utils


    return (
        <Layout>
            <header>
                <h1>Buscador de Películas</h1>
                <SearchForm
                    search={search}
                    setSearch={setSearch}
                    sort={sort}
                    setSort={setSort}
                    searchError={searchError}
                    getMovies={getMovies}
                />
            </header>

            <main>
                <MovieList
                    loading={loading}
                    movies={movies}
                    onEmptyMovies={() => <NoSearchResults/>}
                    onLoading={() => Array.from(
                        {length: 9},
                        () => <MovieItem key={Math.floor(Math.random() * 1000) + 1} movie={{}} loading={loading}/>
                    )
                    }
                >
                    {
                        movie => <MovieItem key={movie.id} movie={movie} loading={loading}/>
                    }
                </MovieList>
            </main>
        </Layout>
    )
}

export default App
