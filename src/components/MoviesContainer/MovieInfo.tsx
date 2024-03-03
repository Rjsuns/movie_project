import {useNavigate} from "react-router-dom";
import {FC} from "react";

import {IMovie} from "../../interfaces";
import {Poster} from "./Poster";
import css from './Movies.module.css'
import {UseAppContext} from "../../hooks";
import {StarsRating} from "./StarsRating";

interface IProps {
    movie:IMovie
}
const MovieInfo:FC<IProps> = ({movie}) => {
    const {original_title,poster_path, vote_average ,overview ,release_date, genres, budget,runtime,production_countries} = movie;

    const navigate = useNavigate();
    const {setGenre, theme} = UseAppContext();

    const size = 'w500';

    const country = production_countries.length > 0 ? production_countries[0].name : '';

    const isBudget = budget > 0 ? budget : '';

    const moviesByGenre = (id:number,name:string):void =>{
        navigate(`/genres/${id}`);
        setGenre({genre:name});
    }

    return (
        <div>
            <div className={css.MovieInfoContainer}>

                <div className={theme? css.InnerContainerDark : css.InnerContainerLight}>
                    <div className={css.Poster}>
                        <Poster poster_path={poster_path} original_title={original_title} size={size}/>

                        <div className={css.StarsRating}>
                            <StarsRating vote_average={vote_average} size={50}/>
                        </div>
                    </div>

                    <div className={theme? css.MovieInfoDark: css.MovieInfoLight}>
                        <p className={css.OriginalTitle}>{original_title}</p>
                        <p className={css.Info}><i>Release date: </i>{release_date}</p>

                        {country
                            ? <p className={css.Info}><i>Country: </i>{country}</p>
                            : ''}

                        {
                            isBudget
                                ? <p className={css.Info}><i>Budget:</i> {budget}$</p>
                                : ''
                        }

                        <p className={css.Genre}><i>Genre: </i>{genres.map((genre, index) => <span
                            key={genre.id} onClick={()=>moviesByGenre(genre.id,genre.name)}>{genre.name}{index !== genres.length - 1 && ', '}</span>)}</p>

                        <p className={css.Info}><i>Runtime:</i> {runtime} min</p>
                        <p className={css.Info}><i>About:</i> {overview}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export {
    MovieInfo
};