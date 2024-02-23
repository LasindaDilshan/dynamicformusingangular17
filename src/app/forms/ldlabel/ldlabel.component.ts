import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-ldlabel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ldlabel.component.html',
  styleUrl: './ldlabel.component.css',
})
export class LdlabelComponent {
  @Input() Name: string = '';
  @Input() Ldclass: string = '';
}
