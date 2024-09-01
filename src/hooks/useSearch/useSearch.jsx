import React, {useEffect, useRef, useState} from 'react';

function UseSearch(props) {
    const [search, setSearch] = useState('')
    const [searchError, setSearchError] = useState(null);
    const isFirstInput = useRef(true)

    useEffect(() => {
        setSearchError('')
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }

        if (search.match(/^\d+$/)) {
            setSearchError('No se puede Buscar una pelicula con numero')
        }
    }, [search]);

    return {search,setSearch, searchError, isFirstInput};
}

export default UseSearch;