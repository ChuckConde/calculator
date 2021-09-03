import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  result = 0;
  newVal = '';
  storedResult = '0';
  storedFunc = '';
  mathApplied = false;

  public clear() {
    this.newVal = '';
    this.result = 0;
  }
  public numberFunc(num: any) {
    if (this.newVal) {
      if(this.mathApplied) {
        this.newVal = num;
        this.mathApplied = false;
      } else {
        this.newVal += num;
      }
    } else {
      if (num !== '0') {
        this.newVal = num;
      } else {
        if(this.storedFunc) {
          this.newVal = num;
        } else {
          return;
        }
      }
    }
  }
  public arithmeticOperation(t: string) {
    this.mathApplied = true;
    this.storedResult = this.newVal;
    this.storedFunc = t;
  }
  public equals() {
    switch (this.storedFunc) {
      case 'sum':
        this.result = parseFloat(this.storedResult) + parseFloat(this.newVal) ;
        this.newVal = '';
        this.storedResult = '';
        break;
      case 'minus':
        this.result = parseFloat(this.storedResult) - parseFloat(this.newVal) ;
        this.newVal = '';
        this.storedResult = '';
        break;
      case 'multiply':
        this.result = parseFloat(this.storedResult) * parseFloat(this.newVal) ;
        this.newVal = '';
        this.storedResult = '';
        break;
      case 'divide':
        this.result = parseFloat(this.storedResult) / parseFloat(this.newVal) ;
        this.newVal = '';
        this.storedResult = '';
        break;
    }
  }
}
