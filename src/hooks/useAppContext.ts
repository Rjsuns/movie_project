import {useContext} from "react";

import {IContext} from "../interfaces";
import {Context} from "../hoc";

const UseAppContext = () => {
    const {theme, setTheme,genre, setGenre} = useContext(Context) as IContext;
    return {
        theme,
        setTheme,
        genre,
        setGenre
    }
};

export {UseAppContext};