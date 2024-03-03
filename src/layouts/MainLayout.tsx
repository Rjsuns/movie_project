import {Outlet} from "react-router-dom";

import {UseAppContext} from "../hooks";
import {Header} from "../components";
import darkCss from './DarkTheme.module.css'
import lightCss from './LighTheme.module.css'

const MainLayout = () => {

    const {theme} = UseAppContext();

    return (
        <div>
            <Header/>
            <div className={theme ? darkCss.Background : lightCss.Background}>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};