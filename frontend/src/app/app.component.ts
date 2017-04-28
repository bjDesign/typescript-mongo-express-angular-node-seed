import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProteinScoreService } from './services/protein-score.service';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalDialogService } from './services/modal-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal: boolean;
  dialogType: string;
  dialogTitle: string;
  constructor(private router: Router, private proteinScoreService: ProteinScoreService, private modalService: ModalDialogService){
    this.showModal = false;
    this.modalService.isVisible$.subscribe(value => {this.showModal = value;});
    this.modalService.dialogType$.subscribe(type => {this.dialogType = type;});
    this.modalService.dialogTitle$.subscribe(title => {this.dialogTitle = title;});
  }
  ngOnInit(){
    // onActivate(e, outlet){
    //   outlet.scrollTop = 0;
    // }
    // 
  }
}
