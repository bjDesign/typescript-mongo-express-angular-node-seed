import { Component, OnInit, Input } from '@angular/core';
import { ModalDialogService } from '../services/modal-dialog.service';
import { ProteinScoreService } from '../services/protein-score.service';

@Component({
  selector: 'app-protein-item',
  templateUrl: './protein-item.component.html',
  styleUrls: ['./protein-item.component.css']
})

export class ProteinItemComponent implements OnInit {
  @Input() title: string;
  @Input() fdr: number;
  @Input() score: number;
  @Input() maxScore: number;
  @Input() maxFdr: number;

  dialogTitle: string;

  minScoreVisible: number;
  maxScoreVisible: number;
  minFdrVisible: number;
  maxFdrVisible: number;

  constructor(private modalService: ModalDialogService, private proteinScoreService: ProteinScoreService){
    this.dialogTitle = '';

    this.minScoreVisible = proteinScoreService.minimumScoreRange - 1;
    this.maxScoreVisible = proteinScoreService.maximumScoreRange + 1;
    
    this.proteinScoreService.currentMinScore$.subscribe(value => {this.minScoreVisible = (value - 1);});
    this.proteinScoreService.currentMaxScore$.subscribe(value => {this.maxScoreVisible = (value + 1);});


  }

  openProteinModal(title){
    this.dialogTitle = title;
    this.modalService.toggleDialog(true);
    this.modalService.updateDialog('protein', title);
  }

  ngOnInit() {
  }

}
