import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UiLabelComponent } from '../ui-label/ui-label.component';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [UiLabelComponent, ReactiveFormsModule],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss',
})
export class UiInputComponent {
  @Input({ required: true }) control!: FormControl<string>;
}
