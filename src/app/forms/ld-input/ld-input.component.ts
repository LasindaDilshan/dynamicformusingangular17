import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ld-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ld-input.component.html',
  styleUrl: './ld-input.component.css',
})
export class LdInputComponent {
  @Input() LdformControlName: string = '';
  @Input() Ldclass: string = '';
  @Input() Ldtype: string = '';
  @Input() form!: FormGroup;
}
