import {Component, EventEmitter, Input, OnInit, Output, SimpleChange, OnChanges} from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() search_term: string;
  @Input() get_latest: string;
  movies: Array<any>;
  page: number = 1;
  total_pages: number;
  search_term_val: any;
  get_latest_val: boolean = false;
  total_results: number = 0;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnChanges(changes: {[search_term: string]: SimpleChange}) {
    if (changes['search_term'] && this.search_term) {
      this.search_term_val = this.search_term;
      if (!this.search_term_val) {
        this.getMovies();
      } else {
        this.searchMovies(this.search_term_val);
      }
    }
    if (changes['get_latest'] && this.get_latest) {
      this.getLatestMoviesList();
    }
  }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.page = 1;
    this.movieService.getMoviesList(this.page).then(response => {
      this.movies = response.movies.results;
      this.total_pages = response.movies.total_pages;
      this.total_results = response.movies.total_results;
    });
  }
  searchMovies(val: String) {
    this.page = 1;
    this.movieService.searchMovies(val, this.page).then(response => {
      this.movies = response.movies.results;
      this.total_pages = response.movies.total_pages;
      this.total_results = response.movies.total_results;
      this.get_latest_val = false;
    });
  }
  getLatestMoviesList() {
    this.page = 1;
    this.movieService.getLatestMoviesList(this.page).then(response => {
      this.movies = response.movies.results;
      this.total_pages = response.movies.total_pages;
      this.total_results = response.movies.total_results;
      this.get_latest_val = false;
    });
  }
  changePage(e, t) {
    if (t === 'next') {
      this.page += 1;
      this.getMovies();
    } else {
      this.page -= 1;
      this.getMovies();
    }
  }
}
