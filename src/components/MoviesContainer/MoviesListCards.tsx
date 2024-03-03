import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Poster} from "./Poster";
import css from './Movies.module.css'
import {StarsRating} from "./StarsRating";
import {UseAppContext} from "../../hooks";

interface IProps {
    movie: IMovie
}

const MoviesListCards:FC<IProps> = ({movie}) => {
    const {original_title, poster_path, vote_average, id} = movie;
    const navigation = useNavigate();
    const {theme} = UseAppContext();


    const size = 'w200';

    return (
        <div className={css.MovieContainer}>
            <div className={theme ? css.MovieLight : css.MovieDark} onClick={() => navigation(`/movies/${id}`)}>
                <Poster poster_path={poster_path} original_title={original_title} size={size}/>
                <p>{original_title}</p>
                <StarsRating vote_average={vote_average} size={16}/>
            </div>
        </div>
    );
};

export {
    MoviesListCards
}