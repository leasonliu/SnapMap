import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NOTES } from "./notes";
import { MatDialog } from "@angular/material/dialog";
import { OriginalNoteDialogComponent } from "../originalnotedialog/originalnotedialog.component";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.createForm();
    this.notes = NOTES;
  }

  searchForm: FormGroup;
  keyword: string = "";
  notes = [];
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
    this.notes = NOTES;
    let newNotes = [];
    if (data.search) {
      for (const field in this.fieldsNeededToBeSearched) {
        for (const item in this.notes) {
          if (
            this.notes[item][this.fieldsNeededToBeSearched[field]]
              .toLowerCase()
              .indexOf(data.search.toLowerCase()) != -1
          ) {
            newNotes.push(this.notes[item]);
          }
        }
      }
      this.notes = newNotes;
    }
  }

  openOriginal(index) {
    const dialogRef = this.dialog.open(OriginalNoteDialogComponent, {
      width: "700px",
      height: "560px",
      closeOnNavigation: true,
      data: this.notes[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  getCatedID(id) {
    return "work" + id;
  }
}
