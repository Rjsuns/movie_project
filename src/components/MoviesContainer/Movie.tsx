import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {MovieInfo} from "./MovieInfo";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";


const Movie = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState<IMovie>(null);

    useEffect(() => {
        movieService.getById(id).then(({data})=>setMovie(data))
    }, [id]);

    return (
        <div>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {Movie};