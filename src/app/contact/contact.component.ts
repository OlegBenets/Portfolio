import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit{

  http = inject(HttpClient);

  ngAfterViewInit(): void {
    this.animateContact();
  }

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  animateContact(): void {
    let headline = document.querySelectorAll('.headline');
    let form = document.querySelectorAll('.form-description-container');

    gsap.fromTo(form,
      {y: '100%', opacity: 0},
      {
        opacity: 1,
        y: '0%',
        scrollTrigger: {
          trigger: form,
          start: 'top 99%',
          end: 'top 60%',
      },
      duration: 1,
    }
    );
      gsap.fromTo(headline, 
        { x: '-100%', opacity: 0 },
        { x: '0%', 
          opacity: 1, 
          scrollTrigger: {
            trigger: headline,
            start: 'top 99%',
            end: 'top 40%',
            scrub: true,
          },
        duration: 1
        },
      )
  }
}
