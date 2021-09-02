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

  public clear() {
    this.newVal = '';
    this.result = 0;
  }
  public numberFunc(num: any) {
    if (this.newVal) {
      this.newVal += num;
    } else {
      if (num !== '0') {
        this.newVal = num;
      } else {
        return;
      }
    }
  }
}
