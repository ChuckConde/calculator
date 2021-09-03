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
  multiOperation = false;

  public clear() {
    this.newVal = '';
    this.result = 0;
    this.storedResult = '0';
    this.storedFunc = '';
    this.mathApplied = false;
    this.multiOperation = false;
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
  public addingDecimal() {
    let noPreviousPoint = true;
    if (this.newVal) {
      if(!this.newVal.includes('.')) {
        this.newVal += '.';
      }
    } else {
      this.newVal = '0.'
    }
  }
  public changeSymbol() {
    if(this.newVal) {
      if(this.newVal[0] === '-') {
        this.newVal = this.newVal.substring(1);
      } else {
        this.newVal = '-' + this.newVal
      }
    } else {
      if(this.result !== 0) {
        this.result = this.result * -1;
      }
    }
  }
  public arithmeticOperation(t: string) {
    this.mathApplied = true;
    if(!this.multiOperation) {
      this.storedResult = this.newVal;
    }
    if (!this.storedFunc) {
      this.storedFunc = t;
    } else {
      this.equals();
      this.storedResult = this.result.toString();
      this.storedFunc = t;
      this.multiOperation = true;
    }
  }
  public equals() {
    console.log('equals');
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
      case 'percentage':
        let onePercent = parseFloat(this.newVal) / 100;
        this.result = parseFloat(this.storedResult) * onePercent;
        this.newVal = '';
        this.storedResult = '';
        break;
    }
    this.storedFunc = '';
    this.mathApplied = false;
    this.multiOperation = false;
  }
}
