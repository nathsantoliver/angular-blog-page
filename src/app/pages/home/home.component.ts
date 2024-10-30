import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MainArticleComponent } from "../../components/main-article/main-article.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MainArticleComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'home.responsive.component.css']
})
export class HomeComponent {

}
