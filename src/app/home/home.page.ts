import { Component, ViewChild } from '@angular/core';
import { RoommovieService } from '..//services/roommovie.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides: any;
  movies;
  numer = 1;
  urlSafe: SafeResourceUrl = [];
  //create array of movies
  //create array of urls

  constructor(
    private roomMovieService: RoommovieService,
    private router: Router,
    public sanitizer: DomSanitizer
  ) {
    this.getRoomMovies(this.numer);
  }
  movie() {
    console.log('movie');
    this.router.navigate(['/movie', '61b7e8a431c00c0018526054']);
  }
  loadmore() {
    this.numer++;
    this.getRoomMovies(this.numer);
  }
  getRoomMovies(i: any) {
    this.roomMovieService.getRoommovie().subscribe((data) => {
      console.log(data);
      this.movies = data;
      this.movies = this.movies.slice((i - 1) * 10, i * 10);
      // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      //   this.movies[0].url
      // );
      for (let i = 0; i < this.movies.length; i++) {
        this.urlSafe[i] = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.movies[i].url
        );
      }
    });
  }
  heart() {
    console.log('heart');
    this.slides.closeSlidingItems();
  }
  trash(id) {
    console.log('trash');
    alert(id);
    this.roomMovieService.deleteRoommovie(id).subscribe((data) => {
      console.log(data);
      this.getRoomMovies(id);
    });
    this.slides.closeSlidingItems();
  }
  star() {
    console.log('start');
    this.slides.closeSlidingItems();
  }
}
