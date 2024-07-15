import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input()project = {
      name: "Join",
      img:"src/assets/img/Join.png",
      language: ["JavaScript", "HTML", "CSS", "Firebase"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      liveUrl: "https://join-188.developerakademie.net/html/login.html",
      githubUrl: "https://github.com/OlegBenets/join-dummy"
  };

  formatLanguages(languages: string[]): string {
    return languages.join(' | ');
  }
}
