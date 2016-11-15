import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as ChartJs from 'chart.js'; // 导入chart.js


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    ctx;
   myNewChart;

  constructor(public navCtrl: NavController) {
   
  }

  ngOnInit() {
      this.drawLine();
      this.drawBar();
  }

  drawLine() {
    var canvas = <HTMLCanvasElement> document.getElementById("myChart");
    this.ctx = canvas.getContext("2d");
    ChartJs.Line(this.ctx,{
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of Notes',
                    data: [12, 19, 3, 50, 20, 200],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0.2)',
                        'rgba(0, 0, 0, 0.2)',
                        'rgba(0, 0, 0, 0.2)',
                        'rgba(0, 0, 0, 0.2)',
                        'rgba(0, 0, 0, 0.2)',
                        'rgba(0, 0, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    }

    drawBar() {
        var canvas = <HTMLCanvasElement> document.getElementById("myChart2");
    this.ctx = canvas.getContext("2d");
    ChartJs.Bar(this.ctx,{
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                  label: '# of One',
                  backgroundColor : ['rgba(0,0,0,0.5)','rgba(0,0,0,0.5)','rgba(0,0,0,0.5)',
                  'rgba(0,0,0,0.5)','rgba(0,0,0,0.5)','rgba(0,0,0,0.5)','rgba(0,0,0,0.5)'],
                  data : [65,59,90,81,56,55,40]
                },
                {
                  label: '# of Two',
                  backgroundColor : ['rgba(0,0,255,0.5)','rgba(0,0,255,0.5)','rgba(0,0,255,0.5)','rgba(0,0,255,0.5)',
                  'rgba(0,0,255,0.5)','rgba(0,0,255,0.5)','rgba(0,0,255,0.5)'],
                  data : [28,48,40,19,96,27,100]
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    }
    
   
}
