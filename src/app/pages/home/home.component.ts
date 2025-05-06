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
      type: 'Feature-film',
      image: 'assets/BENDITAREBELDÍA.png',
      link: 'benditarebeldia'
    },
    {
      title: 'ENCANTO',
      type: 'Feature-film',
      image: 'assets/ENCANTO.png',
      link: 'encanto'
    },
    {
      title: 'CHARLIE',
      type: 'Short',
      image: 'assets/CHARLIE.png',
      link: 'charlie'
    },
    {
      title: 'THE FIRE ESCAPE',
      type: 'Short',
      image: 'assets/THEFIREESCAPE.png',
      link: 'thefireescape'
    },
    {
      title: 'CÓMO CON - BANCOLOMBIA',
      type: 'Commercial work',
      image: 'assets/CHARLIE.png',
      link: 'comoconbancolombia'
    },

  ];

}
