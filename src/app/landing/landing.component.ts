import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  movie: Array<any>;
  search = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  movieFind(title: string): any {
    this.moviesService.getTitleFind(title).subscribe((data) => {
      console.log(data);
      this.movie = data;
    });
  }
  handleSubmit(): any {
    console.log(this.search);
    this.movieFind(this.search);
  }
}
