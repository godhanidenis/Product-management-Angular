import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

export interface DummyData {
  upc: number;
  activity: string;
  shelfDays: string;
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss'],
})
export class AddProductsComponent implements OnInit {
  addProductForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}

  dummyData: DummyData[] = [
    { upc: 10101010, activity: 'one', shelfDays: '5' },
    { upc: 14984894, activity: 'two', shelfDays: '7' },
    { upc: 165168489, activity: 'three', shelfDays: '6' },
    { upc: 156498, activity: 'four', shelfDays: '8' },
  ];

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      upc: ['', Validators.required],
      activity: ['', Validators.required],
      shelfDays: ['', Validators.required],
      activateStore: [true],
    });
  }

  get addProductFormControl() {
    return this.addProductForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.addProductForm.valid) {
      alert(
        'Form Submitted successfully!!!\n Check the values in browser console.'
      );
      console.log('data...', this.addProductForm.value);
    }
  }
}
