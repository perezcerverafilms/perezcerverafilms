import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  projects = [
    {
      title: 'BENDITA REBELDÍA',
      type: 'Largometraje',
      image: 'assets/images/elearning.jpg',
      link: 'https://example.com/elearning'
    },
    {
      title: 'ENCANTO',
      type: 'Largometraje',
      image: 'assets/images/portfolio.jpg',
      link: 'https://example.com/portfolio'
    }
  ];

}
