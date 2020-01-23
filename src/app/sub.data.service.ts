import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubDataService {

  constructor() { }

  get value() {
    return { count: 999 };
  }
}
