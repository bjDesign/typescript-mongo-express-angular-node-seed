import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ModalDialogService{
  private isVisible = new Subject<boolean>();
  isVisible$ = this.isVisible.asObservable();
  private dialogTitle = new Subject<string>();
  dialogTitle$ = this.dialogTitle.asObservable();
  private dialogType = new Subject<string>();
  dialogType$ = this.dialogType.asObservable();

  updateDialog(type, title){
    this.dialogType.next(type);
    this.dialogTitle.next(title);
  }

  toggleDialog(value){
      this.isVisible.next(value);
  }

  constructor(){

  }
}