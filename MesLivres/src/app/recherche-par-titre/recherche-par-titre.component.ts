import { Component, OnInit } from '@angular/core';
import { Livre } from './../model/livre.model';
import { Genre } from './../model/genre.model';

import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styleUrls: ['./recherche-par-titre.component.css']
})
export class RechercheParTitreComponent implements OnInit {

    //livresRecherche : Livre[];
    livres : Livre[];
    genres : Genre[];
    ch : string;

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    //this.livres = this.livreService.listeLivres();
                  this.livres = [];
                    }


  /*onChange() {
    //console.log(this.idGenre);
    this.livres = this.livreService.rechercherParTitre(this.ch);
    }*/

    //API REST
    onChange() {
      //console.log(this.idGenre);
      this.livreService.rechercherParTitre(this.ch).subscribe(livs => {
        console.log(livs);
        this.livres = livs;
        });
      } 

}







/*
  ngOnInit(): void { 
                    this.genres = this.livreService.listeGenres();
                    this.livres = [];
                    //this.livres = this.livreService.listeLivres();
                    }




  onChange() {
    //console.log(this.idGenre);
    this.livres = this.livreService.rechercherParGenre(this.idGenre);
    }
*/
