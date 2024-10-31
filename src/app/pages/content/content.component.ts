import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/post/header/header.component";
import { BodyComponent } from "../../components/post/body/body.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent, BodyComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
