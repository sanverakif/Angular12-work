import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { DetailsComponent } from './movie/details/details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summaryPipe';

@NgModule({
  //kullanıcağımız componentleri ekliyoruz.
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    DetailsComponent,
    FooterComponent,
    SummaryPipe
  ],
  //modul dahil etmek istediğimizde kullanırız. FormsModule/Routing yapılanması
  imports: [
    BrowserModule
  ],
  //servisleri ekleriz
  providers: [],
  //uygulama ilk çalıştığında çağrılan componenttir.
  bootstrap: [AppComponent]
})
export class AppModule { }
