import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  styleUrls: ["./article-preview.component.scss"]
})
export class ArticlePreviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  showTooltip(event) {
    document.getElementById("tooltip").style.visibility = "visible";
    document.getElementById("tooltip").style.top = `${event.pageY - 68}px`;
    document.getElementById("tooltip").style.left = `${event.pageX - 98}px`;
  }

  hideTooltip(event) {
    document.getElementById("tooltip").style.visibility = "hidden";
  }
}
