import { Component, OnInit, HostBinding } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NOTES } from "./notes";
import { MatDialog } from "@angular/material/dialog";
import { OriginalNoteDialogComponent } from "../originalnotedialog/originalnotedialog.component";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  

  ngOnInit() {
    this.createForm();
    this.notes = NOTES;
    this.http.get(this.url, { observe: "body" }).subscribe((data: any) => {
      this.notes = data;
      this.tempNotes = data;
    });
  }
  url = "http://10.215.56.192:10088/api/timeline/IBM-2018-001";
  searchForm: FormGroup;
  keyword: string = "";
  notes = [];
  tempNotes = [];
  fieldsNeededToBeSearched = [
    "time",
    "title",
    "fullText",
    "treatment",
    "problem",
    "test"
  ];

  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ""
    });
    this.searchForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data) {
    this.tempNotes = this.notes;
    let newNotes = [];
    if (data.search) {
      for (const field in this.fieldsNeededToBeSearched) {
        for (const item in this.tempNotes) {
          if (
            this.tempNotes[item][this.fieldsNeededToBeSearched[field]]
              .toLowerCase()
              .indexOf(data.search.toLowerCase()) != -1
          ) {
            newNotes.push(this.tempNotes[item]);
          }
        }
      }
      console.log(this.tempNotes);
      this.tempNotes = newNotes;
    }
  }

  openOriginal(index) {
    const dialogRef = this.dialog.open(OriginalNoteDialogComponent, {
      width: "700px",
      height: "560px",
      closeOnNavigation: true,
      data: this.tempNotes[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  getCatedID(id) {
    return "work" + id;
  }

  getTreat(i) {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.tempNotes[i]["treatment"]
    );
  }
  getProb(i) {
    return this.sanitizer.bypassSecurityTrustHtml(this.tempNotes[i]["problem"]);
  }
  getTest(i) {
    return this.sanitizer.bypassSecurityTrustHtml(this.tempNotes[i]["test"]);
  }

  getFreqColor(i) {
    let freq = this.tempNotes[i]["frequency"];
    return freq < 0.05 ? "light" : freq < 0.12 ? "normal" : "dark";
  }
}
