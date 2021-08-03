import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  title = 'SPLITTER';
  tipCustomised: string = 'Custom';

  numOfPeople: number = 1;
  tipTotal: number = 0;
  totalPerson: number = 0;

  bill: string = '';
  buttons: string[] = ['5', '10', '15', '25', '50'];

  getBillInput(event: any) {
    this.bill = event.target.value;
  }

  getTotalPeopleInput(event: any) {
    this.numOfPeople = event.target.value;
    let calc = this.calcTotalPerson();
  }

  addToExpression(value: string) {
    this.tipTotal = (Number(value) * Number(this.bill)) / 100;
    let calc = this.calcTotalPerson();
  }

  calcTotalPerson(): number {
    return (this.totalPerson =
      (this.tipTotal + Number(this.bill)) / this.numOfPeople);
  }
}
