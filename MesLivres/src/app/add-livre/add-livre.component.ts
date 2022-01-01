
import { Component, OnInit } from '@angular/core';

//Data Binding From VIEW To MODULE
import { Livre } from '../model/livre.model';

//service
import { LivreService } from '../services/livre.service';

//
import { Router } from '@angular/router';

//Genre
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

//Data Binding From VIEW To MODULE
  newLivre = new Livre();
  message : string;



//Genre
  genres : Genre[];

  newIdGen : number;
  newGenre : Genre;

  /*service*/
  constructor(private livreService: LivreService,
              private router: Router
              ) { }




  ngOnInit()/*: void*/ {
    this.genres = this.livreService.listeGenres();
  }

  //Data Binding From VIEW To MODULE
  addLivre(){
    //console.log(this.newLivre);
    //service

    //Genre
    //ngModel Two Way Data Binding
    this.newGenre = this.livreService.consulterGenre(this.newIdGen);
    this.newLivre.genre = this.newGenre;


    //ngModel Two Way Data Binding
    this.livreService.ajouterLivre(this.newLivre)
    .subscribe(liv => {
      console.log(liv);
    });
    //this.message = "Livre " + this.newLivre.titreLivre + " ajouté avec succès !";

    // reload   .then(() => { window.location.reload(); })
    this.router.navigate(['livres']).then(() => {
      window.location.reload();
      });
    }



}
