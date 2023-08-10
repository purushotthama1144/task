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
  }

  shortTermChart() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.shortTerm = {
      series: dataSeries,
      chart: {
        width: 380,
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

  intermediateTermChart() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.intermediateTerm = {
      series: dataSeries,
      chart: {
        width: 380,
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
        width: 380,
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
        width: 380,
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
        width: 380,
        type: "pie"
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
        width: 380,
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
        width: 380,
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
        width: 380,
        type: "pie"
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
        width: 380,
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
        width: 380,
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
        width: 380,
        type: "pie"
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
        width: 380,
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
        width: 380,
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
        width: 380,
        type: "pie"
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
        width: 380,
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
        width: 380,
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
        width: 380,
        type: "pie"
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
        width: 380,
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
        width: 380,
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
        width: 380,
        type: "pie"
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
        width: 380,
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
        width: 380,
        type: "pie"
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
        width: 380,
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
        width: 380,
        type: "pie"
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