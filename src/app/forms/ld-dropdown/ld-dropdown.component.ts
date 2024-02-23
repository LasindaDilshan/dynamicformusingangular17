import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface LdbraveOptions {
  key: string;
  value: string;
}
@Component({
  selector: 'app-ld-dropdown',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ld-dropdown.component.html',
  styleUrl: './ld-dropdown.component.css',
})
export class LdDropdownComponent implements OnInit {
  @Input() LdformControlName: string = '';
  @Input() Ldclass: string = '';
  @Input() Ldtype: string = '';
  @Input() form!: FormGroup;
  @Input() Ldoptions: any;
  options: any = [
    { key: 'solid', value: 'Solid' },
    { key: 'great', value: 'Great' },
    { key: 'good', value: 'Good' },
    { key: 'unproven', value: 'Unproven' },
  ];
  constructor() {
    console.log(this.Ldoptions);
  }
  ngOnInit(): void {
    console.log(this.Ldoptions);
  }
}
