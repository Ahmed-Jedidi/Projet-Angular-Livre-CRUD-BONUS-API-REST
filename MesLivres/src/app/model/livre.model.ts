import { Genre } from "./genre.model";

export class Livre {
    idLivre : number;
    isbnLivre : number;
    titreLivre : string;
    auteurLivre :string;
    prixLivre : number;
    datePublication : Date;
    genre : Genre;
    }
    