import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;

  saveData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
