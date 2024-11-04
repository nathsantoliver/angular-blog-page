import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input()
  articleTitle:string = ""
  @Input()
  articleAuthor:string = ""
  @Input()
  articleDate:string = ""
  @Input()
  articleImg:string = ""
  @Input()
  id:string = "0"
}
