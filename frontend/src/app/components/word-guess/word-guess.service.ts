import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class WordGuessService {
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getWords() {
    return this.http.get(`${this.uri}/words`);
  }
}
