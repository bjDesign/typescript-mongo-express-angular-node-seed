import { Component, OnInit, Input } from '@angular/core';
import { ModalDialogService } from '../services/modal-dialog.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  // Inputs will receive values from vars in app.component, which get defined by modal-dialog.service
  @Input() dialogTitle: string;
  @Input() dialogType: string;

  constructor(private modalService: ModalDialogService) { 
     
  }

  hideModal(){
    this.modalService.toggleDialog(false);
  }

  ngOnInit() {
  }

}
