import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input()project = {
      name: "Join",
      img:"src/assets/img/Join.png",
      language: ["JavaScript", "HTML", "CSS", "Firebase"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
  };

  formatLanguages(languages: string[]): string {
    return languages.join(' | ');
  }
}
