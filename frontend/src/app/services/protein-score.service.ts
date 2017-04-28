import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ProteinScoreService {

  // Global constants
  public minimumScoreRange:number;
  public maximumScoreRange:number;


  // Updateable values
  private currentMinScore = new Subject<number>();
  currentMinScore$ = this.currentMinScore.asObservable();
  private currentMaxScore = new Subject<number>();
  currentMaxScore$ = this.currentMaxScore.asObservable();
 
  updateScoreService(currentMinScoreValue, currentMaxScoreValue){
    this.currentMinScore.next(currentMinScoreValue);
    this.currentMaxScore.next(currentMaxScoreValue);
  }

  setMinMaxConstants(globalMin, globalMax){
    this.minimumScoreRange = globalMin;
    this.maximumScoreRange = globalMax;
  }

  constructor(){
    this.minimumScoreRange = 0;
    this.maximumScoreRange = 2222;
  }

}