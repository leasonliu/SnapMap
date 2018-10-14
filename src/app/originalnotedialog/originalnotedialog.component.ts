import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-originalnotedialog",
  templateUrl: "./originalnotedialog.component.html",
  styleUrls: ["./originalnotedialog.component.css"]
})
export class OriginalNoteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OriginalNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  field = "fullText";

  original = this.sanitizer.bypassSecurityTrustHtml(this.data[this.field]);

  close() {
    this.dialogRef.close();
  }
}
