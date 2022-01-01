import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';



@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: []
})
export class UpdateLivreComponent implements OnInit {

  currentLivre = new Livre();

  //Genre
  genres : Genre[];
  updatedGenre : Genre;


  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private livreService: LivreService) { }

  ngOnInit(): void {
    //Genre
    this.genres = this.livreService.listeGenres();

    // console.log(this.route.snapshot.params.id);
    /*this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params.id);
    console.log(this.currentLivre);*/
    //API REST
    this.livreService.consulterLivre(this.activatedRoute.snapshot.params.id).
    subscribe( liv =>{ this.currentLivre = liv; } ) ;

  }

  updateLivre()
  { 
    //Genre
    //this.updatedGenre = this.livreService.consulterGenre(this.currentLivre.genre.idGen);
    //this.currentLivre.genre = this.updatedGenre;

    
    //console.log(this.currentLivre);
  //this.livreService.updateLivre(this.currentLivre);
  //this.router.navigate(['livres']);
  //API REST
  this.livreService.updateLivre(this.currentLivre).subscribe(liv => {
    this.router.navigate(['livres']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }



}
