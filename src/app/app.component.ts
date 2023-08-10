import { Component } from '@angular/core';
import { PopupChartComponent } from './popup-chart/popup-chart.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog,) {}
  openPopupChart() {
    this.dialog.open(PopupChartComponent, {
      data : {},
      disableClose: true,
      width: '80%',
      panelClass: 'custom-modalbox',
      // position: {
      //   bottom: '0px',
      //   left:'0px'
      // }
    });
  }
}
