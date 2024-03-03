import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IResGenre} from "../interfaces";

const genresService = {
    getAll:():IRes<IResGenre>=>apiService.get(urls.genres)
}
export {genresService}