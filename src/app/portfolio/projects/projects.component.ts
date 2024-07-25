import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  /**
   * The project object containing details about a specific project.
   * 
   * @type {Object}
   * @property {string} name - The name of the project.
   * @property {string} img - The URL path to the project image.
   * @property {string[]} language - An array of programming languages or technologies used in the project.
   * @property {string} description - A brief description of the project.
   * @property {string} liveUrl - The URL to the live version of the project.
   * @property {string} githubUrl - The URL to the project's GitHub repository.
   */
  @Input() project = {
    name: 'Join',
    img: 'src/assets/img/Join.png',
    language: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    liveUrl: 'https://join-188.developerakademie.net/html/login.html',
    githubUrl: 'https://github.com/OlegBenets/join-dummy',
  };

  /**
   * Formats the list of programming languages into a single string separated by ' | '.
   * 
   * @param {string[]} languages - An array of programming languages or technologies.
   * @returns {string} - A formatted string where languages are joined by ' | '.
   */
  formatLanguages(languages: string[]): string {
    return languages.join(' | ');
  }
}
