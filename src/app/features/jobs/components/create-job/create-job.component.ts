import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
})
export class CreateJobComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private formb: FormBuilder,
    private jobService: JobsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formb.group({
      title: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100),
        ],
      ],
      description: [null, [Validators.required, Validators.maxLength(100)]],
      price: [null, [Validators.required, Validators.maxLength(10)]],
      paymentMethods: [null, [Validators.required, Validators.maxLength(100)]],
      dueDate: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.jobService.createJob(this.form.value).subscribe(
        (success) => {
          alert('Cadastrado'), this.router.navigateByUrl('jobs');
        },
        (error) => alert(error)
      );
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
