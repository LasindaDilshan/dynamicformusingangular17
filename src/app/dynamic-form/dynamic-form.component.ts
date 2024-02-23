import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { LdlabelComponent } from '../forms/ldlabel/ldlabel.component';
import { LdInputComponent } from '../forms/ld-input/ld-input.component';
import { LdDropdownComponent } from '../forms/ld-dropdown/ld-dropdown.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    LdlabelComponent,
    LdInputComponent,
    LdDropdownComponent,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent {
  formBuilder = inject(FormBuilder);
  dynamicForm: FormGroup = this.formBuilder.group({});
  formService = inject(FormServiceService);

  constructor() {}

  ngOnInit() {
    const formStructure = this.formService.getFormStructure();

    let formGroup: Record<string, any> = {};
    formStructure.forEach((control) => {
      let controlValidators: Validators[] = [];

      if (control.validations) {
        control.validations.forEach((validation) => {
          if (validation.validator === 'required')
            controlValidators.push(Validators.required);
          if (validation.validator === 'email')
            controlValidators.push(Validators.email);
          // Add more built-in validators as needed
        });
      }
      console.log(controlValidators);

      formGroup[control.name] = [control.value || '', controlValidators];
    });

    this.dynamicForm = this.formBuilder.group(formGroup);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl) {
      return '';
    }

    for (let validation of control.validations) {
      if (formControl.hasError(validation.name)) {
        console.log(validation.message);
        return validation.message;
      }
    }
    return '';
  }
}
