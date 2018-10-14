import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  pid = "IBM-2018-010";
  note = "";

  url = "http://10.215.56.192:10088/api/note";

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  onSubmit() {
    this.http
      .post(this.url, { pid: this.pid, note: this.note }, { observe: "body" })
      .subscribe(response => {
        console.log(response);
      });
    this.openSnackBar("Submitted", "OK");
  }
}
