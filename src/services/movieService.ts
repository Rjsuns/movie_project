import {apiService} from "./apiService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IResMovie} from "../interfaces";

const movieService = {
    getAll:(page:string):IRes<IResMovie>=>apiService.get(urls.movies.base,{params:{page}}),
    getById:(id:string):IRes<IMovie>=>apiService.get(urls.movies.byId(id)),
    getByGenreId:(genreId:string,page:string):IRes<IResMovie>=>apiService.get(urls.movies.base,{params:{with_genres:genreId,page}})
}

export {
    movieService
}