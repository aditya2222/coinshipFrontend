import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';
  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

}

export interface Config {
  heroesUrl: string;
  textfile: string;
}