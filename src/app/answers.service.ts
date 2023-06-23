import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  answers = [];
  static priceFrom: any;
  static priceTo: any;
  static maxPrice: any;


  constructor(
    private http: HttpClient,
  ) { }

  addAnswers(userInput) {
    this.answers.push(userInput);
    this.answers.push(AnswersService.priceFrom);
    this.answers.push(AnswersService.priceTo);
    this.answers.push(AnswersService.maxPrice);
  }

  getAnswers() {
    return this.answers;
  }

  clearAnswers() {
    this.answers = [];
    return this.answers;
  }
}
