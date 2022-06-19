import axios from "axios";

const API = 'https://dummyjson.com/'

export class Base  {
    constructor(subPath) {
        this.service = axios.create({baseURL: API + subPath})
    }
}
