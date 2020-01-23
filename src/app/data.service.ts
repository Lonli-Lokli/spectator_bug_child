import { Injectable } from '@angular/core';
import { SubDataService } from './sub.data.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  initialized: boolean;

  constructor(private subDataService: SubDataService) {
    this.initialized = true;
  }

  get value() {
    return { count: 1 };
  }

  get subValue() {
    return this.subDataService.value;
  }
}
