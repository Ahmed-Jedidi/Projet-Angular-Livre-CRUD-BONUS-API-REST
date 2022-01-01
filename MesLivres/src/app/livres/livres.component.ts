import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//model
import { Livre } from '../model/livre.model';
import { AuthService } from '../services/auth.service';

//service
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  //Data Binding
  //livres : string[]; //un tableau de chaines de caracteres
  //Data Binding + model 
  livres : Livre[]; //un tableau de livre

  /* service */
  constructor(private livreService: LivreService,
              public authService: AuthService,
              private router: Router) { 
    //Data Binding
    /*this.livres = livreService.listeLivres();*/
   }
    /*[
      //export class livre {
      //idLivre : number;
      //isbnLivre : number;
      //titreLivre : string;
      //auteurLivre : string;
      //prixLivre : number;
      //datePublication : Date ;}
      //model
      //1
      {
        idLivre : 1, 
        isbnLivre : 9788423991815,
        titreLivre : "The 48 Laws of Power ",
        auteurLivre : "Robert Greene",
        prixLivre : 26*3,
        datePublication : new Date("12/17/1998")
      },
      //2
      {
        idLivre : 2, 
        isbnLivre : 	1439167346,
        titreLivre : "How to win friends and influence people",
        auteurLivre : "Dale Carnegie",
        prixLivre : (8.02) *3,
        datePublication : new Date("10/11/1937")
      },
      //3
      {
        idLivre : 3, 
        isbnLivre : 9788423991815,
        titreLivre : "The life-changing Magic of Tidying",
        auteurLivre : "Mari Kondo",
        prixLivre : 15.040*3,
        datePublication : new Date("10/14/2014")
      }
   ];*/
  

  ngOnInit(): void {
    this.livreService.listeLivres().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
  }

  //Supprimer
  /*supprimerLivre(li: Livre)
  {
  console.log(li);
  //this.livreService.supprimerProduit(li);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.livreService.supprimerLivre(li);
  console.log("livre supprimé");
  }*/

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

}
