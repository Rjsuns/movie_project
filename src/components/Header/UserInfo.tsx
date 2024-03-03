import {FC} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import lightCss from './LighTheme.module.css'
import darkCss from './DarkTheme.module.css'
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

interface IProps{
    theme:boolean
}
const UserInfo:FC<IProps> = ({theme}) => {
    return (
        <div className={theme ? `${lightCss.User}` : `${darkCss.User}`}>
            <FontAwesomeIcon icon={faCircleUser} />
            <p> Ruslan :(</p>
        </div>
    );
};

export {
    UserInfo
}