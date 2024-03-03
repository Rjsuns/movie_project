import {IRes} from "../types";
import {IResMovie, ISearch} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getAll: (query: ISearch, page: string):IRes<IResMovie>=>apiService.get(urls.search, {params:{query:query.search, page}})
}
export {searchService}