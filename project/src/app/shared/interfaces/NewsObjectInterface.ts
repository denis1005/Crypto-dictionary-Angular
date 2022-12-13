import { INewsArticle } from "./NewsInterface";

export interface INewsObject {
    articles:INewsArticle[];
    status:string,
    totalResults:number
}