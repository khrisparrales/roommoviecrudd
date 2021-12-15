import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoommovieService {
  url = 'https://apiroommovie.herokuapp.com/api/';
  constructor(private http: HttpClient) {}
  getRoommovie() {
    return this.http.get(this.url + 'movies');
  }
  getRoommovieById(id) {
    return this.http.get(this.url + 'movies/' + id);
  }
  deleteRoommovie(id) {
    return this.http.delete(this.url + 'movies/' + id);
  }
}
