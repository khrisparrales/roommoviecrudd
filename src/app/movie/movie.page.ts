import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoommovieService } from '../services/roommovie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  idm;
  movie;
  urlSafe: SafeResourceUrl;
  constructor(
    private route: ActivatedRoute,
    private roomService: RoommovieService
  ) {
    const { id } = this.route.snapshot.params;
    this.idm = id;
    this.roomService.getRoommovieById(this.idm).subscribe((data) => {
      console.log(data);
      this.movie = data;
    });
  }

  ngOnInit() {}
}
