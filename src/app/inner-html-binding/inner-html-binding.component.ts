import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-html-binding',
  template: `
    <h3>Binding innerHTML</h3>
    <p>Bound value:</p>
    <p class="e2e-inner-html-interpolated">{{htmlSnippet}}</p>
    <p>Result of binding to innerHTML:</p>
    <p class="e2e-inner-html-bound" [innerHTML]="htmlSnippet"></p>
  `,
  styleUrls: ['./inner-html-binding.component.css']
})
export class InnerHtmlBindingComponent implements OnInit {
  
  htmlSnippet = 'Template <script>alert("danger");</script> <b>Syntax</b>';
  
  constructor() { }

  ngOnInit() {
  }

}
