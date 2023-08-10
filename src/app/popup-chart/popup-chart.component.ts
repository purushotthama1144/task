import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { dataList } from './data'

@Component({
  selector: 'app-popup-chart',
  templateUrl: './popup-chart.component.html',
  styleUrls: ['./popup-chart.component.css']
})

export class PopupChartComponent implements OnInit{
  @ViewChild('chart') chart: ChartComponent = {} as ChartComponent;
  date:any;
  shortTerm: any;
  intermediateTerm: any;
  longTerm: any;
  dowDonut: any;
  dowShortTerm: any;
  dowIndexElement: any;
  sandpDonut: any;
  sandpShortTerm: any;
  sandpIndexElement: any;
  nasdaqDonut: any;
  nasdaqShortTerm: any;
  nasdaqIndexElement: any;
  midcapDonut: any;
  midcapShortTerm: any;
  midcapIndexElement: any;
  smallcapDonut: any;
  smallcapShortTerm: any;
  smallcapIndexElement: any;
  europeonDonut: any;
  europeonShortTerm: any;
  emergingDonut: any;
  emergingShortTerm: any;
  southAmericanDonut: any;
  southAmericanShortTerm: any;
  biotechnologyDonut: any;
  biotechnologyShortTerm: any;
  semiconductorDonut: any;
  semiconductorShortTerm: any;
  airlineDonut:any;
  airlineShortTerm:any;
  regionalBankDonut:any;
  regionalBankShortTerm:any;
  solarDonut:any;
  solarShortTerm:any;
  healthcareDonut:any;
  healthcareShortTerm:any;
  builderDonut:any;
  builderShortTerm:any;
  materialDonut:any;
  materialShortTerm:any;

  constructor() {}

  ngOnInit(): void {
    this.date = Date.now()
    this.shortTermChart();
    this.intermediateTermChart();
    this.longTermChart();
    this.dowThirty();
    this.sandpFiveHundred();
    this.NASDAQ();
    this.midCap();
    this.smallCap();
    this.europeonMarket();
    this.emergingMarket();
    this.southAmericanMarket();
    this.biotechnology();
    this.semiconductor();
    this.airlines();
    this.regionalBank();
    this.solar();
    this.healthcare();
    this.homeBuilder();
    this.materials();
  }

  shortTermChart() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.shortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  intermediateTermChart() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.intermediateTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "pie"
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  longTermChart() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.longTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "pie"
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  dowThirty() {
    let dataLabels = dataList.opinion.map(sector => sector.name);
    let dataSeries = dataList.opinion.map(sector => sector.value);

    this.dowDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.dowShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.dowIndexElement = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "Index component up down:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  sandpFiveHundred() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.sandpDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.sandpShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.sandpIndexElement = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "Index component up down:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  NASDAQ() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.nasdaqDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.nasdaqShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.nasdaqIndexElement = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "Index component up down:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  midCap() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.midcapDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.midcapShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.midcapIndexElement = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "Index component up down:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  smallCap() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.smallcapDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.smallcapShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.smallcapIndexElement = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "Index component up down:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  europeonMarket() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.europeonDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.europeonShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  

  emergingMarket() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.emergingDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.emergingShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  } 

  southAmericanMarket() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.southAmericanDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.southAmericanShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  

  biotechnology() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.biotechnologyDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.biotechnologyShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  

  semiconductor() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.semiconductorDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.semiconductorShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  } 

  airlines() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.airlineDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.airlineShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  

  regionalBank() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.regionalBankDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.regionalBankShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  

  solar() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.solarDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.solarShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  

  healthcare() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.healthcareDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.healthcareShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  
  
  homeBuilder() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.builderDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.builderShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  

  materials() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.materialDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.materialShortTerm = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      title: {
        text: "short term opinion:",
        align: "left",
        style: {
          fontSize: "12px"
        }
      },
      labels: dataLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }  
}