import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../model/genre.model';

//sevice
import { Livre } from '../model/livre.model';

//API REST
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };



@Injectable({
  providedIn: 'root'
})
export class LivreService {
  
  //API REST
  apiURL: string = 'http://localhost:8080/livres/api';


  //service
  livres : Livre[]; //un tableau de Produit
  livre : Livre;

  genres : Genre[]; //Genre



  constructor( /*API REST*/private http : HttpClient ) {

    this.genres = [ {idGen : 1, nomGen : "Auto-assistance"},
                    {idGen : 2, nomGen : "Fantasy"}
                  ]

    //service
    /*export class livre {
      idLivre : number;
      isbnLivre : number;
      titreLivre : string;
      auteurLivre : string;
      prixLivre : number;
      datePublication : Date ;}*/
      //model
      
    this.livres = [ 
      /*//1
      {idLivre : 1, 
        isbnLivre : 9788423991815,
        titreLivre : "The 48 Laws of Power ",
        auteurLivre : "Robert Greene",
        prixLivre : (26*3),
        datePublication : new Date("12/17/1998"),
        genre : {idGen : 1, nomGen : "Auto-assistance"}
      },
      //2
      {idLivre : 2, 
        isbnLivre : 	1439167346,
        titreLivre : "How to win friends and influence people",
        auteurLivre : "Dale Carnegie",
        prixLivre : (8.02) *3,
        datePublication : new Date("10/11/1937"),
        genre : {idGen : 1, nomGen : "Auto-assistance"}
      },
      //3
      {idLivre : 3, 
        isbnLivre : 9788423991815,
        titreLivre : "The life-changing Magic of Tidying",
        auteurLivre : "Mari Kondo",
        prixLivre : (15.040*3),
        datePublication : new Date("10/14/2014"),
        genre : {idGen : 1, nomGen : "Auto-assistance"}
      },
      //4
      {idLivre : 4, 
        isbnLivre : 9780061122415,
        titreLivre : "The alchemist",
        auteurLivre : "Paulo Coelho",
        prixLivre : (21.040*3),
        datePublication : new Date("04/14/1988"),
        genre : {idGen : 2, nomGen : "Fantasy"}
      }*/
      ];
   }

  

   //service
   /*ajouterLivre(liv: Livre){
     this.livres.push(liv);
   }*/
   //API REST
   ajouterLivre( liv: Livre ):Observable<Livre>{
    return this.http.post<Livre>(this.apiURL, liv, httpOptions);
    }

   //service
   /*supprimerLivre( liv: Livre){
    //supprimer le produit prod du tableau produits
    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
    this.livres.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    /*}*/
    //API REST
    supprimerLivre(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
    

 //service
 /*listeLivres():Livre[]{
  return this.livres; 
 }*/
 //API REST
 listeLivres(): Observable<Livre[]>{
  return this.http.get<Livre[]>(this.apiURL);
  }


 /*consulterLivre(id:number): Livre{
  this.livre = this.livres.find(p => p.idLivre == id);
  return this.livre;
  }*/
  //API REST
  consulterLivre(id: number): Observable<Livre> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Livre>(url);
    }


  trierLivres(){
    this.livres = this.livres.sort((n1,n2) => {
    if (n1.idLivre > n2.idLivre) {
    return 1;
    }
    if (n1.idLivre < n2.idLivre) {
    return -1;
    }
    return 0;
    });
    }

  /*updateLivre(livr:Livre)
  {
  // console.log(livr);
  this.supprimerLivre(livr.idLivre);
  this.ajouterLivre(livr);
  this.trierLivres();
  }*/
  //API REST
  updateLivre(liv :Livre) : Observable<Livre>
  {
  return this.http.put<Livre>(this.apiURL, liv, httpOptions);
  }


      //Genre
      genre = new Genre();

  listeGenres():Genre[] {
    return this.genres;
    }

  consulterGenre(id:number): Genre{
    this.genre = this.genres.find(gen => gen.idGen == id);
    return this.genre;
    }


    livresRecherche : Livre[]; //Rechercher

    // Rechercher par gendre
    /*rechercherParGenre(idGen: number): Livre[]{
      this.livresRecherche = [];

      this.livres.forEach((cur, index) => {
      if ( idGen == cur.genre.idGen ) {
          console.log("cur "+cur);
          this.livresRecherche.push(cur);
          }
      });
      return this.livresRecherche; 
    }*/
    


    //API REST
    livsgen: string = 'livsgen';
    rechercherParGenre(idGen: number): Observable<Livre[]>{
      this.livresRecherche = [];
      const url = `${this.apiURL}/${this.livsgen}/${idGen}`;
      return this.http.get<Livre[]>(url);

    }



///////////////////////////////////////////////////////////////////////
    livresRechercheTitre : Livre[]; //Rechercher Titre
    // Rechercher par titre
    /*rechercherParTitre(ch: string): Livre[]{
      this.livresRechercheTitre = [];

      this.livres.forEach((cur, index) => {
      if ( //cur.titreLivre.includes(ch)
        cur.titreLivre.toUpperCase().includes(ch.toUpperCase()) 
        //ch == cur.titreLivre 
        ) {
          console.log("cur "+cur);
          this.livresRechercheTitre.push(cur);
          }
      });
      return this.livresRechercheTitre; 
    }*/

    //API REST
    livstitre: string = 'livstitre';
    
    rechercherParTitre(ch: string): Observable<Livre[]>{
      this.livresRechercheTitre = [];

      const url = `${this.apiURL}/${this.livstitre}/${ch}`;
      return this.http.get<Livre[]>(url);
    }

 
}
