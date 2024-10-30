import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent {
  @Input()
  cardImg:string=""
  @Input()
  cardDate:string=""
  @Input()
  cardTitle:string=""
}
