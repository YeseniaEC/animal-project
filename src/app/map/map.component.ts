import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import {  } from "";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  private chart: AmChart;

  constructor(private AmCharts: AmChartsService) { 
   
  };

  ngOnInit(){
  };

  animalPopup(){
    alert();
  }



};
