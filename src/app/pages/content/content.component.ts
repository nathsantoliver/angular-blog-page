import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/post/header/header.component";
import { BodyComponent } from "../../components/post/body/body.component";
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent, BodyComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  contentImg:string = ''
	contentTitle:string = ''
	contentDate:string = ''
	contentAuthor:string = ''
  private id:string | null = "0"

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
		this.route.paramMap.subscribe( value =>
			this.id = value.get("id")
		)

    this.setValuesToComponent(this.id)
	}

  setValuesToComponent(id:string | null) {
		const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.contentImg = result.photoCover;
		this.contentTitle = result.title;
		this.contentDate = result.date;
    this.contentAuthor = result.author;

	}
}
