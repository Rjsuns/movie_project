import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IMovie, ISearch} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import formCss from './SearchForm.module.css'
import css from '../MoviesContainer/Movies.module.css'
import {MoviesList, MoviesListCards} from "../MoviesContainer";
import {searchService} from "../../services";
import {Pagination} from "../PaginationContainer";

const SearchForm = () => {
    const [value, setValue] = useState<ISearch>(null);
    const [initialMovieList, setInitialMovieList] = useState<boolean>(true);
    const [foundedMovies, setFoundedMovies] = useState<IMovie[]>([]);
    const [totalResults, setTotalResults] = useState<number>(null);
    const [totalPages, setTotalPages] = useState<number>(1);

    const {register, handleSubmit, reset} = useForm<ISearch>();

    const [query, setQuery] = useSearchParams({page: "1"})
    const page: string = query.get('page');

    const submit: SubmitHandler<ISearch> =  (value) => {
        setValue(value);
        setQuery((prev)=>{
            prev.set('page', `${1}`);
            return prev
        })
        setInitialMovieList(false);
        reset();
    }

    useEffect(() => {
        if (value) {
            searchService.getAll(value, page).then(({ data: { results,total_results,total_pages } }) => {
                setFoundedMovies(results);
                setTotalResults(total_results);

                if (total_pages<=500){
                    setTotalPages(total_pages);
                }else {
                    setTotalPages(500);
                }
            });
        }

    }, [value, page]);


    return (
        <div className={totalResults<11 ? `${formCss.Container}` : ''}>

            <form onSubmit={handleSubmit(submit)} className={formCss.Form}>
                <input type="search" required={true} placeholder={'Search'} {...register('search')} className={formCss.Input}/>
                <button type={"submit"} className={formCss.Button}> <FontAwesomeIcon icon={faMagnifyingGlass}/> </button>

            </form>

            <div className={css.Movies}>
                {
                    initialMovieList
                        ? <MoviesList/>
                        :
                        totalResults === 0
                            ? (<p className={formCss.ErrorText}><span> Not found, please check your request :( </span></p>)

                            : (foundedMovies.map(movie => <MoviesListCards movie={movie} key={movie.id}/>))
                }
            </div>

            <div>
                {initialMovieList || totalResults === 0
                    ? ''
                    : <Pagination setQuery={setQuery} page={page} totalPages={totalPages}/>
                }
            </div>

        </div>
    );
};

export {
    SearchForm
}