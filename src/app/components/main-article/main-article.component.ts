import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-article',
  standalone: true,
  imports: [],
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.css', './main-article.responsive.component.css']
})
export class MainArticleComponent {
  @Input()
  articleImg:string = ""
  @Input()
  articleDate:string = ""
  @Input()
  articleTitle:string = ""
}
