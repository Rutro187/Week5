import { Component, OnInit } from '@angular/core';
import {OmdbService} from '../omdb.service';
import { Observable, interval, fromEvent } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
