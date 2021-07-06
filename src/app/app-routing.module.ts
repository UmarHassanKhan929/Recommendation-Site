import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'movies',component: MoviesComponent},
  {path:'shows',component: ShowsComponent},
  {path:'games',component: GamesComponent},
  {path:'books',component: BooksComponent},
  {path:'music',component: MusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
