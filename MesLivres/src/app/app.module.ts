import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';

//Data Binding From VIEW To MODULE
import { FormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

//Me copy
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParGenreComponent,
    RechercheParTitreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//Data Binding From VIEW To MODULE
    FormsModule,
//Spring Boot API REST
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
