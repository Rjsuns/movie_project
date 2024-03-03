import {FC, useEffect, useState} from "react";

import {IPoster} from "../../interfaces";
import {posterService} from "../../services";
import without_image from './images/without_image.jpg'

interface IProps {
    poster_path:string,
    original_title:string,
    size:string
}

const Poster:FC<IProps> = ({poster_path,original_title, size}) => {

    const [url, setUrl] = useState<IPoster>( {secure_base_url: null});

    useEffect(() => {
        posterService.getPoster().then(({data:{images:{secure_base_url}}})=>setUrl({secure_base_url}));
    }, []);


    const imageURL = `${url.secure_base_url}${size}${poster_path}`;

    const isImage = (poster_path:string) =>{
        if (poster_path){
            return <img src={imageURL} alt={original_title}/>
        } else {
            return <img src={without_image} alt={'not available'} style={{width: 200, height: 300}}/>;
        }

    }

    return isImage(poster_path);
};

export {
    Poster
}