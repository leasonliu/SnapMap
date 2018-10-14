import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-originalnotedialog",
  templateUrl: "./originalnotedialog.component.html",
  styleUrls: ["./originalnotedialog.component.css"]
})
export class OriginalNoteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OriginalNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}

  field = "fullText";

  original = this.data[this.field];

  close() {
    this.dialogRef.close();
  }
}
