import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MainArticleComponent } from "../../components/main-article/main-article.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MainArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
