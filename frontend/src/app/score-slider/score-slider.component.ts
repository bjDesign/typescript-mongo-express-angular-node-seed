import { Component, OnInit } from '@angular/core';

import { ProteinScoreService } from '../services/protein-score.service';

@Component({
  selector: 'app-score-slider',
  templateUrl: './score-slider.component.html',
  styleUrls: ['./nouislider.min.css']
})
export class ScoreSliderComponent implements OnInit {

  sliderMin: number;
  sliderMax: number;
  rangeValues: number[];
  currentMinValue: number;
  currentMaxValue: number;
  currentMinScorePosition: number;
  currentMaxScorePosition: number;
  currentMinFDR: number;
  currentMaxFDR: number;

  constructor(private proteinScoreService:ProteinScoreService) { 
    this.sliderMin = proteinScoreService.minimumScoreRange;
    this.sliderMax = proteinScoreService.maximumScoreRange;
    this.rangeValues = [this.sliderMin, this.sliderMax];
    this.currentMinValue = this.sliderMin;
    this.currentMaxValue = this.sliderMax;
    this.currentMinScorePosition = this.currentMinValue/this.sliderMax * 100;
    this.currentMaxScorePosition = this.currentMaxValue/this.sliderMax * 100;
    this.currentMinFDR = (this.sliderMax - this.currentMinScorePosition)/20.83907;
    this.currentMaxFDR = (this.sliderMax - this.currentMaxScorePosition)/20.83907;
  }

  sliderChange(e){
    this.currentMinValue = e.values[0];
    this.currentMaxValue = e.values[1];
    this.currentMinScorePosition = this.currentMinValue/this.sliderMax * 100;
    this.currentMaxScorePosition = this.currentMaxValue/this.sliderMax * 100;
    this.currentMinFDR = (this.sliderMax - this.currentMinScorePosition)/20.83907;
    this.currentMaxFDR = (this.sliderMax - this.currentMaxScorePosition)/20.83907;
    this.proteinScoreService.updateScoreService(this.currentMinValue, this.currentMaxValue);
  }

  ngOnInit() {
  }

}
