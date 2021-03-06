import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {HomeComponent} from '../components/home/Home'
import {MoviesComponent} from '../components/movies/Movies'
import {EditMovieComponent} from '../components/editMovie/EditMovie'

@Component({
    selector: 'movies-app',
    templateUrl:'ts/app/app.html',
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', redirectTo: ['/Movies'] },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/movies', name: 'Movies', component: MoviesComponent },
    { path: '/movies/edit/:id', name: 'Editmovie', component: EditMovieComponent }
])
export class App {
    constructor(router:Router) {

    }
}