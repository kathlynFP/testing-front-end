import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesUrl = 'https://imdb8.p.rapidapi.com/title';

  constructor(private http: HttpClient) { }

  getTitleFind(): any {
    const headers = new HttpHeaders().set(
      'x-rapidapi-host', 'imdb8.p.rapidapi.com'
    ).set('x-rapidapi-key', 'fec1d2d1f7mshe48795e4accee61p194ac9jsn508d3ef68d63').set('useQueryString', 'true');
    //   "x-rapidapi-key": "fec1d2d1f7mshe48795e4accee61p194ac9jsn508d3ef68d63",
    //     "useQueryString": true
    // });
    return this.http.get<any[]>(`${this.moviesUrl}/find?q=game%20of%20thr`, { headers });
  }
}
