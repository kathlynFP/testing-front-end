import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  movies: Array<any>;
  search = '';
  active = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  movieFind(title: string): any {
    this.moviesService.getTitleFind(title).subscribe((data) => {
      this.active = true;
      this.movies = data.results;
    });
  }
  handleSubmit(): any {
    this.movieFind(this.search);
  }
}
