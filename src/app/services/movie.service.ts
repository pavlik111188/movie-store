import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

  // URL to web api https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
  public domain = 'https://api.themoviedb.org/';
  public api_key = '0f04bbdc102bbd08c7caca24bb575d45';
  private getMoviesListUrl = '3/discover/movie';
  private searchMiviesUrl = '3/search/movie?api_key=';
  private getLatestMoviesListUrl = '3/movie/latest?api_key=';

  constructor(
    private http: Http
  ) { }

  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }

  searchMovies(val: String, page:number): Promise<any> {
      const url = `${this.domain}${this.searchMiviesUrl}${this.api_key}&page=${page}&query=${val}`;
      return this.http.get(url)
          .toPromise()
          .then(
              (response: Response) => {
                  let movies = response.json();
                  if (movies) {
                      movies.results = movies.results;
                      movies.page = movies.page;
                      movies.total_pages = movies.total_pages;
                      return {status: 'Success', movies: movies};
                  }
              },
              error => {
                  return {
                      status: 'Error',
                      error: JSON.parse(Object(error)._body).message
                  }
              }
          )
          .catch(this.handleError);
  }

  getMoviesList(page: number): Promise<any> {
        const params = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';
        const url = `${this.domain}${this.getMoviesListUrl}?api_key=${this.api_key}${params}${page}`;
        return this.http.get(url)
            .toPromise()
            .then(
                (response: Response) => {
                    let movies = response.json();
                    if (movies) {
                        movies.results = movies.results;
                        movies.page = movies.page;
                        movies.total_pages = movies.total_pages;
                        return {status: 'Success', movies: movies};
                    }
                },
                error => {
                    return {
                        status: 'Error',
                        error: JSON.parse(Object(error)._body).message
                    }
                }
            )
            .catch(this.handleError);
    }
    getLatestMoviesList(page: number): Promise<any> {
        const url = `${this.domain}${this.getLatestMoviesListUrl}${this.api_key}&page=${page}`;
        return this.http.get(url)
            .toPromise()
            .then(
                (response: Response) => {
                    let movies = response.json();
                    if (movies) {
                        movies.results = movies.results;
                        movies.page = movies.page;
                        movies.total_pages = movies.total_pages;
                        return {status: 'Success', movies: movies};
                    }
                },
                error => {
                    return {
                        status: 'Error',
                        error: JSON.parse(Object(error)._body).message
                    }
                }
            )
            .catch(this.handleError);
    }
}
