import {IGenre} from "./genreInterface";

export interface IMovie {
    id:string,
    genre_ids:number[],
    genres:IGenre[],
    budget:number,
    runtime:number,
    overview:string,
    original_title:string,
    poster_path:string,
    release_date:string,
    vote_average:number,
    production_countries:[{name:string}] | []
}