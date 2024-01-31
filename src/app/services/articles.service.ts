import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticles(q: string, from: string, sortBy: string) {
    console.log('hello');
    return this.httpClient.get(
      `https://newsapi.org/v2/everything?q=${q}&from=${from}&sortBy=${sortBy}&apiKey=` +
        environment.apikey,
    );
  }
}
