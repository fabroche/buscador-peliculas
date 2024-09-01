
export const searchMovies = async ({search}) => {
    // API
    const API = 'https://www.omdbapi.com/'
    const API_KEY = '730cb77b'

    try {
        if (search === '') return null

        if (search) {
            const response = await fetch(`${API}?apikey=${API_KEY}&s=${search}`);

            const data = await response.json()

            const movies = data?.Search

            return movies?.map(movie => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            }))
        }
    } catch (e) {
        console.error('Error fetching movies:', e)
    }

}