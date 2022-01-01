import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component'
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LivreGuard } from './livre.guard';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';


const routes: Routes = [
  {path: "livres", component : LivresComponent},
  {path: "add-livre", component : AddLivreComponent,  canActivate:[LivreGuard]},
  {path: "updateLivre/:id", component: UpdateLivreComponent,  canActivate:[LivreGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent},
  {path: "rechercheParTitre", component : RechercheParTitreComponent},
  {path: "", redirectTo: "livres", pathMatch: "full"}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 