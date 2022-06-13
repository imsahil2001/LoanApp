import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  salary: string = '';
  resultString: string = '';
  loan: number = 0;
  salaryInt: number = 0;

  constructor() {}

  ngOnInit(): void {}

  calculate(): void {
    this.salaryInt = Number(this.salary);
    if (this.salaryInt < 200000) {
      this.resultString = 'Sorry, your income is too low';
    } else {
      this.loan = (this.salaryInt * 25) / 100 + this.salaryInt;
      this.resultString = `You will get loan amount of INR ${this.loan}`;
      console.log(this.loan);
    }
  }
}
