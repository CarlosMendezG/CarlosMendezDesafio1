import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'dialog-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

  cerrarDialog() {
    this.dialogRef.close();
  }
}
