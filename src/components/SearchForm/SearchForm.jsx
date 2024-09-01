import React from 'react';
import './SearchForm.css'
import useSearch from "../../hooks/useSearch/useSearch.jsx";
import {useDebounce} from "../../hooks/useDebounce/useDebounce.jsx";

function SearchForm({search, setSearch, searchError, getMovies, sort, setSort}) {

    const {error} = useDebounce(search, getMovies, 1000)

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies({ search });
    }

    const handleOnChange = (e) => {
        const newSearch = e.target.value
        setSearch(newSearch)
        // getMovies({search: newSearch})
    }

    const handleToggleSort = () => {
        setSort(!sort)
    }

    return (
        <>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <input
                    name='search'
                    value={search}
                    onChange={(e) => handleOnChange(e)}
                    placeholder='Avengers. Star Wars, The Matrix...'/>
                <input type="checkbox" onChange={handleToggleSort} checked={sort}/>
                <button>Buscar</button>
            </form>
            {searchError && <p>{searchError}</p>}
        </>
    );
}

export default SearchForm;