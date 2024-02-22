import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./input.component.css']
})
export class InputComponent{
  teacher = { firstName: '', lastName: '', employmentTerm: 'Full-time' };

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    this.dataService.saveData(this.teacher);
    this.router.navigate(['/output']);
  }
}
