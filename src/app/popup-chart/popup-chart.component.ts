import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { dataList, barChartData, sectorData } from './data'

@Component({
  selector: 'app-popup-chart',
  templateUrl: './popup-chart.component.html',
  styleUrls: ['./popup-chart.component.css']
})

export class PopupChartComponent implements OnInit , AfterViewInit {
  
  @ViewChild('chart') chart: ChartComponent = {} as ChartComponent;
  @Output() allChartLoad = new EventEmitter<boolean>();
  date: any;
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
  airlineDonut: any;
  airlineShortTerm: any;
  regionalBankDonut: any;
  regionalBankShortTerm: any;
  solarDonut: any;
  solarShortTerm: any;
  healthcareDonut: any;
  healthcareShortTerm: any;
  builderDonut: any;
  builderShortTerm: any;
  materialDonut: any;
  materialShortTerm: any;
  communicationDonut: any;
  communicationShortTerm: any;
  financialDonut: any;
  financialShortTerm: any;
  technologyDonut: any;
  technologyShortTerm: any;
  realEstateDonut: any;
  realEstateShortTerm: any;
  consumerDicretionDonut: any;
  consumerDicretionShortTerm: any;
  consumerStapleDonut: any;
  consumerStapleShortTerm: any;
  energyDonut: any;
  energyShortTerm: any;
  OilGasDonut: any;
  OilGasShortTerm: any;
  retailDonut: any;
  retailShortTerm: any;
  industrialDonut: any;
  industrialShortTerm: any;
  utilityDonut: any;
  utilityShortTerm: any;
  commodityIndexDonut: any;
  commodityIndexShortTerm: any;
  treasuryDonut: any;
  treasuryShortTerm: any;
  goldDonut: any;
  goldShortTerm: any;

  dowBarChart: any;
  spBarChart: any;
  nasdaqBarChart: any;
  midcapBarChart: any;
  smallcapBarChart: any;
  sectorHeatMap: any;

  industryHeatMap: any;
  thematicHeatMap: any;

  exchangeLevelUpdown: any;
  exchangeLevelBullish: any;
  exchangeLevelBearish: any;
  exchangeLevelSma200: any;
  exchangeLevelSma50: any;

  constructor() { }

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
    this.communication();
    this.financial();
    this.technology();
    this.realEstate();
    this.consumerDicretion();
    this.consumerStaple();
    this.energy();
    this.OilGas();
    this.retail();
    this.industrial();
    this.utilities();
    this.commodityIndex();
    this.treasury();
    this.gold();
    this.dowChart();
    this.spChart();
    this.nasdaqChart();
    this.midcapChart();
    this.smallcapChart();
    this.sectorHeatMapChart();
    this.industryHeatMapChart();
    this.thematicHeatMapChart();
    this.exchangeLevelUpdownBarChart();
    this.exchangeLevelBullishBarChart();
    this.exchangeLevelBearishBarChart();
    this.exchangeLevelSma50BarChart();
    this.exchangeLevelSma200BarChart();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.allChartLoad.emit(true);
    }, 2000);
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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

  communication() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.communicationDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.communicationShortTerm = {
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
        align: "center",
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

  financial() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.financialDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.financialShortTerm = {
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
        align: "center",
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

  technology() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.technologyDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.technologyShortTerm = {
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
        align: "center",
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

  realEstate() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.realEstateDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.realEstateShortTerm = {
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
        align: "center",
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

  consumerDicretion() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.consumerDicretionDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.consumerDicretionShortTerm = {
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
        align: "center",
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

  consumerStaple() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.consumerStapleDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.consumerStapleShortTerm = {
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
        align: "center",
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

  energy() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.energyDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.energyShortTerm = {
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
        align: "center",
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

  OilGas() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.OilGasDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.OilGasShortTerm = {
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
        align: "center",
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

  retail() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.retailDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.retailShortTerm = {
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
        align: "center",
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

  industrial() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.industrialDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.industrialShortTerm = {
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
        align: "center",
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

  utilities() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.utilityDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.utilityShortTerm = {
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
        align: "center",
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

  commodityIndex() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.commodityIndexDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.commodityIndexShortTerm = {
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
        align: "center",
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

  treasury() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.treasuryDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.treasuryShortTerm = {
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
        align: "center",
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

  gold() {
    const dataLabels = dataList.opinion.map(sector => sector.name);
    const dataSeries = dataList.opinion.map(sector => sector.value);

    this.goldDonut = {
      series: dataSeries,
      chart: {
        width: 300,
        type: "donut",
      },
      title: {
        text: "doughnut Doughnut Chart:",
        align: "center",
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

    this.goldShortTerm = {
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
        align: "center",
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

  dowChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.dowBarChart = {
      series: [
        {
          name: "Dow",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Dow 30",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  spChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.spBarChart = {
      series: [
        {
          name: "Dow",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Dow 30",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  nasdaqChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.nasdaqBarChart = {
      series: [
        {
          name: "S & P",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "S & P",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  midcapChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.midcapBarChart = {
      series: [
        {
          name: "Midcap",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Midcap",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  smallcapChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.smallcapBarChart = {
      series: [
        {
          name: "Midcap",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Midcap",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  sectorHeatMapChart() {
    const dataLabels = sectorData.data.map(data => data.category);
    const dataSeries = sectorData.data.map(data => data.value);

    this.sectorHeatMap = {
      series: [
        {
          name: "Cash Flow",
          data: dataSeries,
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#F15B46"
              },
              {
                from: -45,
                to: 0,
                color: "#FEB019"
              }
            ]
          },
          columnWidth: "80%"
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        title: {
          text: "Sector Heat Map"
        },
        labels: {
          formatter: function (y: any) {
            return y.toFixed(0) + "%";
          }
        }
      },
      xaxis: {
        type: "datetime",
        categories: dataLabels,
        labels: {
          rotate: -90
        }
      }
    };
  }

  industryHeatMapChart() {
    this.industryHeatMap = {
      series: [
        {
          name: "W1",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W2",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W3",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W4",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W5",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W6",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W7",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W8",
          data: this.generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W9",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W10",
          data: this.generateData(5, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W11",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W12",
          data: this.generateData(10, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W13",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W14",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W15",
          data: this.generateData(12, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: [
        "#F3B415",
        "#F27036",
        "#663F59",
        "#6A6E94",
        "#4E88B4",
        "#00A7C6",
        "#18D8D8",
        "#A9D794",
        "#46AF78",
        "#A93F55",
        "#8C5E58",
        "#2176FF",
        "#33A1FD",
        "#7A918D",
        "#BAFF29",
      ],
      xaxis: {
        type: "category",
        categories: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "01:00",
          "01:30"
        ]
      },
      title: {
        text: "Industry Heat Map"
      },
      grid: {
        padding: {
          right: 20
        }
      }
    };
  }

  thematicHeatMapChart() {
    this.thematicHeatMap = {
      series: [
        {
          name: "W1",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W2",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W3",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W4",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W5",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W6",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W7",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W8",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W9",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W10",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W11",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W12",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W13",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W14",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W15",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: [
        "#F3B415",
        "#F27036",
        "#663F59",
        "#6A6E94",
        "#4E88B4",
        "#00A7C6",
        "#18D8D8",
        "#A9D794",
        "#46AF78",
        "#A93F55",
        "#8C5E58",
        "#2176FF",
        "#33A1FD",
        "#7A918D",
        "#BAFF29",
      ],
      xaxis: {
        type: "category",
        categories: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "01:00",
          "01:30"
        ]
      },
      title: {
        text: "Thematics Heat Map"
      },
      grid: {
        padding: {
          right: 20
        }
      }
    };
  }

  generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push(y);
      i++;
    }
    return series;
  }

  exchangeLevelUpdownBarChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.exchangeLevelUpdown = {
      series: [
        {
          name: "Exchange Level",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Exchange Level Up Down",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  exchangeLevelBullishBarChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.exchangeLevelBullish = {
      series: [
        {
          name: "Exchange Level",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Exchange level bullish",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  exchangeLevelBearishBarChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.exchangeLevelBearish = {
      series: [
        {
          name: "Exchange Level",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Exchange level bearish candle summary",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  exchangeLevelSma50BarChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.exchangeLevelSma50 = {
      series: [
        {
          name: "Exchange Level",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Exchange level above SMA50",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  exchangeLevelSma200BarChart() {
    const dataLabels = barChartData.data.map(data => data.name);
    const dataSeries = barChartData.data.map(data => data.value);

    this.exchangeLevelSma200 = {
      series: [
        {
          name: "Exchange Level",
          data: dataSeries
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: dataLabels,
        position: "top",
        labels: {
          offsetY: -5
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },

      yaxis: {
        labels: {
          show: true,
        }
      },
      title: {
        position: "top",
        text: "Exchange level above SMA200",
        floating: 0,
        offsetY: -5,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }
}