import {useNavigate} from "react-router-dom";
import {FC} from "react";

import {UseAppContext} from "../../hooks";
import css from './Genre.module.css'
import {IGenre} from "../../interfaces";

interface IProps {
    genre:IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {id,name} = genre;

    const navigate = useNavigate();
    const {setGenre} = UseAppContext();

    const moviesByGenre = (id:number,name:string):void =>{
        navigate(`${id}`);
        setGenre({genre:name});
    }

    return (

        <div className={css.Genre}>
            <span onClick={() => moviesByGenre(id,name)} className={css.Text}>{name}</span>
        </div>

    );
};

export {
    Genre
}