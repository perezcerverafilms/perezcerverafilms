import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() image: string = '';
  @Input() link: string = '';
}
