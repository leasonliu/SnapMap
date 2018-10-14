import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  noteForm: FormGroup;

  note = "";
  createForm() {
    this.noteForm = this.formBuilder.group({
      note: ""
    });
  }

  onSubmit() {
    this.note = this.noteForm.get("note").value;
  }
}
