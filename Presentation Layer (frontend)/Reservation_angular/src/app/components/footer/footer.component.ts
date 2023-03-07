import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer1",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
