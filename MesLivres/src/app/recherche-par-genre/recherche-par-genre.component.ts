import { Genre } from './../model/genre.model';
import { Livre } from './../model/livre.model';
import { Component, OnInit } from '@angular/core';
import { LivreService } from '../services/livre.service';
import { AuthService } from '../services/auth.service';
/*import { Router } from '@angular/router';*/

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrls: ['./recherche-par-genre.component.css']
})
export class RechercheParGenreComponent implements OnInit {

  //livresRecherche : Livre[];
  livres : Livre[];
  genres : Genre[];
  idGenre : number;

  constructor(private livreService: LivreService,
              public authService: AuthService/*,
              private router: Router*/) { }

  ngOnInit(): void { 
                    this.genres = this.livreService.listeGenres();
                    this.livres = [];
                    //this.livres = this.livreService.listeLivres();
                    }


/* //API REST
 ngOnInit(): void {
    this.livreService.listeLivres().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
  } */
  

  onChange() {
    //console.log(this.idGenre);
    this.livreService.rechercherParGenre(this.idGenre).subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
    }




    //////////////////////////////////////////////////////


//API REST
supprimerLivre(li: Livre) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.livreService.supprimerLivre(li.idLivre).subscribe(() => {
      console.log("livre supprimé");
      this.SuprimerLivreDuTableau(li);
    });
  /*this.router.navigate(['livres']).then(() => {
    window.location.reload();
  });*/
}



SuprimerLivreDuTableau(prod : Livre) {
  this.livres.forEach((cur, index) => {
  if(prod.idLivre=== cur.idLivre) {
  this.livres.splice(index, 1);
  }
  });
  }

    ///////////////////////
  //Supprimer
  /*supprimerLivre(li: Livre)
  {
  console.log(li);
  //this.livreService.supprimerProduit(li);
  let conf = confirm("Etes-vous sûr ?");
  if (conf){
  this.livreService.supprimerLivre(li.idLivre);
  //console.log("livre supprimé");

  this.livres = this.livreService.rechercherParGenre(this.idGenre);
    //this.router.navigate(['livres']);
  }
  }*/

}
