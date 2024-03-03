import {useEffect, useState} from "react";

import css from './Genre.module.css'
import {UseAppContext} from "../../hooks";
import {Genre} from "./Genre";
import {genresService} from "../../services";
import {IGenre} from "../../interfaces";

const GenreBadge = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {theme} = UseAppContext();

    useEffect(() => {
        genresService.getAll().then(({data:{genres}})=>setGenres(genres))
    }, []);

    return (
        <div className={css.Container}>
            <div className={theme ? css.BlockLight : css.BlockDark}>
                <div className={css.Genres}>
                    {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                </div>
            </div>
        </div>
    );
};

export {
    GenreBadge
}