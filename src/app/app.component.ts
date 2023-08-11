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
      disableClose: false,
      width: '90%',
      panelClass: 'custom-chart-box',
    });
  }
}
