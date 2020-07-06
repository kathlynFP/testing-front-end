import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  movie: Array<any>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieFind();
  }

  movieFind(): any {
    this.moviesService.getTitleFind().subscribe(data => {
      console.log(data);
      this.movie = data;
    });
  }
}
