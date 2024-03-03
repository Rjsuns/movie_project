import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {UseAppContext} from "../../hooks";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import css from './Movies.module.css'
import {MoviesListCards} from "./MoviesListCards";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {Pagination} from "../PaginationContainer";

const MoviesByGenre = () => {
    const {id} = useParams();
    const {genre:{genre}, theme} = UseAppContext();

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    const [query, setQuery] =  useSearchParams({page:"1"})
    const page:string = query.get('page');


    useEffect(() => {
        if (id !== undefined){
            movieService.getByGenreId(id, page).then(({data:{results,total_pages}})=> {
                setMovies(results);

                if (total_pages<=500){
                    setTotalPages(total_pages);
                }else {
                    setTotalPages(500);
                }
            })
        }
    }, [id, page]);
    return (
        <div>
            <div className={theme? css.GenreHeaderLight : css.GenreHeaderDark}><h1><FontAwesomeIcon icon={faFilm}/> {genre}</h1></div>
            <div className={css.Movies}>
                {movies.map(movie => <MoviesListCards key={movie.id} movie={movie}/>)}
            </div>

            <div>
                <Pagination setQuery={setQuery} page={page} totalPages={totalPages}/>
            </div>
        </div>



    );
};

export {
    MoviesByGenre
}