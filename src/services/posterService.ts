import {urls} from "../constants";
import {apiService} from "./apiService";
import {IRes} from "../types";
import {IResPoster} from "../interfaces";

const posterService = {
    getPoster:():IRes<IResPoster>=>apiService.get(urls.configuration)
}
export {posterService}