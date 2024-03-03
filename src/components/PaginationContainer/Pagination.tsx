import {FC, useEffect, useState} from "react";

import css from '../MoviesContainer/Movies.module.css'
import {UseAppContext} from "../../hooks";

interface IProps {
    setQuery: Function;
    page: string;
    totalPages: number;
}

const Pagination: FC<IProps> = ({ setQuery, page, totalPages }) => {

    const {theme} = UseAppContext();

    const [activePage, setActivePage] = useState(+page - 1);

    useEffect(() => {
        setActivePage(+`${+page - 1}`);
    }, [page]);

    const previousPage = () => {
        setQuery((prev: { set: (arg0: string, arg1: string) => void; get: (arg0: string) => string | number }) => {
            prev.set("page", `${+prev.get("page") - 1}`);
            return prev;
        });
    };

    const nextPage = () => {
        setQuery((prev: { set: (arg0: string, arg1: string) => void; get: (arg0: string) => string | number }) => {
            prev.set("page", `${+prev.get("page") + 1}`);
            return prev;
        });
    };

    return (
        <div className={theme? css.ButtonsLight : css.ButtonsDark}>
            <button onClick={previousPage} disabled={page === "1"} className={css.Button}> Back </button>
            <span className={css.ActiveButton}> Page {activePage + 1}</span>
            <button onClick={nextPage} disabled={page === `${totalPages}`} className={css.Button}> Next </button>
        </div>
    );
};

export {Pagination};