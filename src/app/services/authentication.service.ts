import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {

  public token: string;
  public api_key = '0f04bbdc102bbd08c7caca24bb575d45';

  constructor() { }

}
