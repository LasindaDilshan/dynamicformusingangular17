import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formStructure = [
    {
      "type": "text",
      "label": "Name",
      "labelclass": "leading-7 text-sm text-gray-400",
      "name": "name",
      "value": "",
      "typeclass":"w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Name is required"
        }
      ]
    },
    {
      "type": "email",
      "label": "Email",
      "labelclass": "leading-7 text-sm text-gray-400",
      "name": "email",
      "value": "",
      "typeclass":"w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Email is required"
        },
        {
          "name": "email",
          "validator": "email",
          "message": "Invalid email format"
        }
      ]
    },
    {
      "type": "dropdown",
      "label": "Bravery Rating",
      "labelclass": "leading-7 text-sm text-gray-400",
      "name": "Bravery_Rating",
      "value": "",
      "options": [
        {"key": 'solid',  "value": 'Solid'},
        {"key": 'great',  "value": 'Great'},
        {"key": 'good',   "value": 'Good'},
        {"key": 'unproven', "value": 'Unproven'}
      ],
      "typeclass":"w-full rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-white pl-3 pr-10",
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Bravery Rating is required"
        }
      ]
    }
  ];

  getFormStructure() {
    return this.formStructure;
  }}

