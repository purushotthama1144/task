import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations,
} from 'ng-apexcharts';

import { series , marketPerformence} from './data'

export type ChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-popup-chart',
  templateUrl: './popup-chart.component.html',
  styleUrls: ['./popup-chart.component.css']
})
export class PopupChartComponent {
  @ViewChild('chart') chart: ChartComponent = {} as ChartComponent;
  chartOptions: any;
  donutChartOption: any;

  constructor() {
    this.areaChart();
    this.donutChart()
  }

  areaChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Price-1',
          data: series.monthDataSeries1.prices,
        },
        {
          name: 'Price-2',
          data: series.monthDataSeries2.prices,
        },
      ],
      chart: {
        type: 'line',
      },
      annotations: {
        points: [
          {
            x: new Date('01 Dec 2017').getTime(),
            y: 8900,
            marker: {
              size: 6,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
            },
            label: {
              text: 'Data feature',
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 3,
      },
      grid: {
        padding: {
          right: 30,
          left: 20,
        },
      },
      title: {
        text: 'Notification anomalies',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
    };
  }

  donutChart() {
    const sectorNames = marketPerformence.sectorPerformance.map(sector => sector.name);
    const sectorValues = marketPerformence.sectorPerformance.map(sector => sector.value);

    console.log(sectorNames)

    this.donutChartOption = {
      series: sectorValues,
      chart: {
        type: "donut"
      },
      labels: sectorNames,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "top"
            }
          }
        }
      ]
    };
  }

}
