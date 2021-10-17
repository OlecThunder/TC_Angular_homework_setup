import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IMovie } from '../models/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movie: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovie(550)
      .subscribe((movie: IMovie) => {
        this.movie = movie
    });
  }
}
