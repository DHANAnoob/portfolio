import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fadeInUp } from '../../animations/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInUp],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  constructor(private http: HttpClient) {}

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.isSubmitting = true;
    this.showError = false;

    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('message', this.formData.message);
    formData.append('_subject', 'New Contact Form Submission from Portfolio');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
      await fetch('https://formsubmit.co/jdhanasekar1999@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      this.showSuccess = true;
      this.formData = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('Form submission error:', error);
      this.showError = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm(): void {
    this.showSuccess = false;
    this.showError = false;
    this.formData = { name: '', email: '', message: '' };
  }
}
