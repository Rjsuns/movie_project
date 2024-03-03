import {NavLink} from "react-router-dom";

import {UseAppContext} from "../../hooks";
import {ThemeSwitcher} from "./ThemeSwitcher";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserInfo} from "./UserInfo";
import lightCss  from './DarkTheme.module.css';
import darkCss  from './LighTheme.module.css';
import {faVideo} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const {theme, setTheme}  = UseAppContext();

    const headerClass = theme ? lightCss.Header : darkCss.Header;
    const titleClass = theme ? lightCss.Title : darkCss.Title;
    const navLinkClass = theme ? lightCss.Navlink : darkCss.Navlink;

    return (
        <div className={headerClass}>

            <div className={titleClass}>
                <FontAwesomeIcon icon={faVideo}/> <span>MovieDB</span>
            </div>

            <div className={navLinkClass}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>

            <ThemeSwitcher theme={theme} setTheme={setTheme}/>

            <UserInfo theme={theme} />
        </div>
    );
};

export {Header};