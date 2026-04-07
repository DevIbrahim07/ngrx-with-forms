import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { formFeature } from './form/form.feature';
import { resetForm, updateFormField } from './form/form.actions';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // through obervable and constructor
  // form$: Observable<{ name: string; email: string }>;

  // constructor(private store: Store) {
  //   this.form$ = this.store.select(formFeature.selectFormState);
  // }

  // through inject
  private store = inject(Store);
  form$ = this.store.select(formFeature.selectFormState);

  updateField(field: 'name' | 'email', value: string) {
    this.store.dispatch(updateFormField({ field, value }));
  }

  resetForm() {
    this.store.dispatch(resetForm());
  }
}
