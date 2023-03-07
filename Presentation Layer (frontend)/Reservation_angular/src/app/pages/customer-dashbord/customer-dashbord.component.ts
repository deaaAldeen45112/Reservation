import { Component, OnInit } from "@angular/core";
import { ChartConfiguration} from 'node_modules/chart.js';
import Chart from 'chart.js/auto'
import { DatePipe } from '@angular/common'
import { OrderService } from "src/app/service/basicOrder.service";
import { PaymentService } from "src/app/service/payment.service";
import { FormControl } from "@angular/forms";
import { from } from "rxjs";
import { AppModule } from "src/app/app.module";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-customer-dashbord',
  templateUrl: './customer-dashbord.component.html',
  styleUrls: ['./customer-dashbord.component.css']
})
export class CustomerDashbordComponent implements OnInit {

  public canvas : any;
  public ctx :any;
 myChart:any;
 public canvas2 : any;
 public ctx2 :any;
myChart2:any;
  from=new FormControl();
  to =new FormControl();
  constructor(public datepipe: DatePipe,private orderService:OrderService,private paymentService:PaymentService,public spinner: NgxSpinnerService) {}
  CountingOrderByDate(){
 
  console.log(this.from.value)
  if(this.from.value!=null&&this.to.value!=null){
   
    let customerId=localStorage.getItem('customer_id');
    console.log(customerId);
    if(customerId!=null){
  this.orderService.CountingOrderByDateAndByCustomerId(this.from.value,this.to.value,Number.parseInt(customerId)).subscribe((res: any)=>{console.log(res)
  let dataArray:number[]=[];
  let labelArray:string[]=[];
 
res.forEach((element:any) => {
  
dataArray.push(element.count);

});
res.forEach((element:any) => {
let v=this.datepipe.transform(element.date, 'yyyy-MM-dd');
 if(v!=null)
  labelArray.push(v);
  
  });

  console.log(labelArray);
  console.log(dataArray);
  this.myChart.data.datasets[0].data=dataArray;
  this.myChart.data.labels=labelArray;
  this.myChart.update();
  })


this.paymentService.SumPaymentByCustomerIdGroupByDate(this.from.value,this.to.value,Number.parseInt(customerId)).
subscribe(res=>{
  let dataArray:number[]=[];
  let labelArray:string[]=[];
  res.forEach((element:any) => {
  
    dataArray.push(element.sum);
    
    });
    res.forEach((element:any) => {
      let v=this.datepipe.transform(element.date, 'yyyy-MM-dd');
      if(v!=null)
      labelArray.push(v);
      
      
      });
      console.log(labelArray);
      console.log(dataArray);
      this.myChart2.data.datasets[0].data=dataArray;
      this.myChart2.data.labels=labelArray;
      this.myChart2.update();
    



})
  }
  }
  this.spinner.hide();



}

  ngOnInit() {

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
       
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };
    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data:[],
      }]
    };

     this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });


    this.canvas2 = document.getElementById("chartLine");
    this.ctx2 = this.canvas2.getContext("2d");

    var gradientStroke = this.ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
       
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };
    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data:[],
      }]
    };

     this.myChart2 = new Chart(this.ctx2, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });




  
  }

}
