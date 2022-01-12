import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public loading = false;
  public formData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [0, [Validators.max(99), Validators.min(18)]],
      description: ['', Validators.maxLength(150)],
    });
  }

  ngOnInit(): void {}

  submitData(data: any) {
    console.log(data);
  }

  resetForm() {
  }

  
}