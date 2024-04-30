import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-with-title',
  standalone: true,
  imports: [],
  templateUrl: './layout-with-title.component.html',
  styleUrl: './layout-with-title.component.scss',
})
export class LayoutWithTitleComponent {
  @Input({ required: true }) title: string = '';
}
