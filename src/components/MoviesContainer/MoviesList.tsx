import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../services";
import {MoviesListCards} from "./MoviesListCards";
import {IMovie} from "../../interfaces";
import css from './Movies.module.css'
import {Pagination} from "../PaginationContainer";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    const [query, setQuery] =  useSearchParams({page:"1"})
    const page:string = query.get('page');

    useEffect(() => {
        movieService.getAll(page).then(({data:{results,total_pages}})=> {
            setMovies(results);

            if (total_pages<=500){
                setTotalPages(total_pages);
            }else {
                setTotalPages(500);
            }
        })
    }, [page]);


    return (
        <div>
            <div className={css.Movies}>
                {movies.map(movie => <MoviesListCards key={movie.id} movie={movie}/>)}
            </div>
            <Pagination setQuery={setQuery} page={page} totalPages={totalPages}/>


        </div>
    );
};

export {MoviesList};