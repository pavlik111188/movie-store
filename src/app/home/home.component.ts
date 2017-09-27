import {Component, OnInit, NgModule, Input, Output, OnChanges, SimpleChange} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() search_term_val: string;
  @Input() get_latest_val: boolean;
  showSearch: boolean = false;
  knowledge_base_section: string;
  constructor() { }

  ngOnInit() {
    this.showSearch = false;
  }
  toggleChild() {
    this.showSearch = !this.showSearch;
  }
  searchMovieNew(e) {
    this.search_term_val = this.knowledge_base_section;
    this.get_latest_val = false;
    return this.knowledge_base_section;
  }
  getLatestMovies(e) {
    this.get_latest_val = !this.get_latest_val;
  }
}
