import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  /**
   * Creates an instance of the DataService.
   * @param {TranslateService} translate - Service used for language translation.
   */
  constructor(public translate: TranslateService) {
    this.initializeTranslations();
    this.initializeLanguage();
  }

  /**
   * Initializes translations for supported languages.
   * Sets up the English and German translations for various text elements.
   * This method is called in the constructor.
   */
  private initializeTranslations() {
    this.translate.setTranslation('en', {
      ABOUT_ME: 'About me',
      SKILLS: 'Skills',
      PORTFOLIO: 'Portfolio',
      CONTACT: 'Contact',
      I_AM: 'I am',
      FRONTEND_DEVELOPER: 'FRONTEND DEVELOPER',
      LETS_TALK: `Let's talk!`,
      SCROLL_DOWN: `Scroll down`,
      ABOUT_ME_DESCRIPTION:
        'Hello and welcome! I’m Oleg, a Frontend Developer from Kulmbach, Bavaria. I’m passionate about solving complex problems and taking on new challenges in web development. It’s great to have you here!',
      PERSONAL_SHARE_1:
        'I love creating innovative and engaging digital experiences. The ever-changing field of programming keeps me inspired and excited about new possibilities.',
      PERSONAL_SHARE_2:
        'With a strong attention to detail and a knack for problem-solving, I’m ready to tackle any challenge. Feel free to explore my projects to see what I’ve been working on and how I can help with your next project.',
      MY_SKILLS: 'My skills',
      SKILLS_DESCRIPTION:
        'I have gained experience in building projects with various front end technologies and concepts.',
      GET_IN_TOUCH: 'Get in touch',
      PORTFOLIO_DESCRIPTION:
        'Explore a selection of my work here - Interact with projects to see my skills in action.',
      JOIN_DESCRIPTION:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      POLLO_LOCO_DESCRIPTION:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      POKEDEX_DESCRIPTION:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      CONTACT_SUBHEADLINE: 'Got a problem to solve?',
      CONTACT_DESCRIPTION:
        'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
      CONTACT_PROMPT: 'Need a Frontend developer? <b>Contact me!</b>',
      CONTACT_NAME_PLACEHOLDER: 'Your name',
      CONTACT_EMAIL_PLACEHOLDER: 'Your email',
      CONTACT_MESSAGE_PLACEHOLDER: 'Your message',
      CONTACT_PRIVACY_POLICY: 'privacy policy',
      CONTACT_PRIVACY_POLICY_TEXT_1: 'I´ve read the',
      CONTACT_PRIVACY_POLICY_TEXT_2: 'and agree to the processing of my data as outlined.',
      CONTACT_SUBMIT_BUTTON: 'Send message :)',
      CONTACT_NAME_ERROR: 'Please enter your name',
      CONTACT_EMAIL_ERROR: 'Please enter a valid email',
      CONTACT_MESSAGE_ERROR: 'Please enter a message',
      CONTACT_PRIVACY_ERROR: 'Please accept the privacy policy',
      CONFIRM_MESSAGE: 'Thank you for contacting me!',
      IMPRINT: 'Imprint',
      IMPRESSUM_HEADER: 'Imprint',
      IMPRESSUM_PARAGRAPH_1: 'Information in accordance with § 5 DDG',
      IMPRESSUM_PARAGRAPH_2:
        'Oleg Benets <br> Basteigasse 1<br> 95326 Kulmbach <br>',
      IMPRESSUM_PARAGRAPH_3:
        '<strong>Represented by: </strong><br>Oleg Benets<br>',
      IMPRESSUM_CONTACT:'Contact',
      IMPRESSUM_PHONE:'Phone',
      IMPRESSUM_PARAGRAPH_5:
        '<strong>Disclaimer: </strong><br><br><strong>Liability for content</strong><br><br>The contents of our pages were created with the utmost care. However, we cannot guarantee the correctness, completeness, and up-to-dateness of the content. As a service provider, we are responsible for our own content on these pages under general laws according to § 7 Abs.1 DDG. However, according to §§ 8 to 10 DDG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard is only possible from the point in time at which we become aware of a specific legal infringement. Upon becoming aware of corresponding legal violations, we will remove these contents immediately.<br><br><strong>Liability for links</strong><br><br>Our offer contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot assume any responsibility for these external contents. The provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. A permanent content control of the linked pages is, however, not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, we will remove such links immediately.<br><br><strong>Data protection</strong><br><br>The use of our website is usually possible without providing personal data. Insofar as personal data (for example, name, address, or email addresses) is collected on our pages, this is always done, as far as possible, on a voluntary basis. These data will not be passed on to third parties without your explicit consent. <br>We point out that data transmission over the Internet (e.g., when communicating via email) can have security vulnerabilities. A complete protection of the data against access by third parties is not possible. <br>The use of contact data published within the framework of the imprint obligation by third parties for the purpose of sending not explicitly requested advertising and information materials is hereby expressly excluded. The operators of the pages reserve the right to take legal action in the event of the unsolicited sending of advertising information, for example through spam emails.<br>',
      IMPRESSUM_FOOTER:'Website imprint from',
    });

    this.translate.setTranslation('de', {
      ABOUT_ME: 'Über mich',
      SKILLS: 'Fähigkeiten',
      PORTFOLIO: 'Portfolio',
      CONTACT: 'Kontakt',
      I_AM: 'Ich bin',
      FRONTEND_DEVELOPER: 'FRONTEND ENTWICKLER',
      LETS_TALK: `Lass uns sprechen!`,
      SCROLL_DOWN: `Runterscrollen`,
      ABOUT_ME_DESCRIPTION:
        'Hallo und willkommen! Ich bin Oleg, ein Frontend-Entwickler aus Kulmbach, Bayern. Ich bin leidenschaftlich daran interessiert, komplexe Probleme zu lösen und neue Herausforderungen im Web Development anzunehmen. Schön, dass Sie hier sind!',
      PERSONAL_SHARE_1:
        'Ich liebe es, innovative und ansprechende digitale Erlebnisse zu schaffen. Das sich ständig weiterentwickelnde Feld der Programmierung inspiriert mich und hält mich für neue Möglichkeiten begeistert.',
      PERSONAL_SHARE_2:
        'Mit einer ausgeprägten Liebe zum Detail und einem Talent für Problemlösungen bin ich bereit, jede Herausforderung anzugehen. Schauen Sie sich gerne meine Projekte an, um zu sehen, woran ich gearbeitet habe und wie ich Ihnen bei Ihrem nächsten Projekt helfen kann.',
      MY_SKILLS: 'Meine Fähigkeiten',
      SKILLS_DESCRIPTION:
        'Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Front-End-Technologien und -Konzepten.',
      GET_IN_TOUCH: 'Kontakt aufnehmen',
      PORTFOLIO_DESCRIPTION:
        'Entdecken Sie eine Auswahl meiner Arbeit hier - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
      JOIN_DESCRIPTION:
        'Task-Manager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      POLLO_LOCO_DESCRIPTION:
        'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      POKEDEX_DESCRIPTION:
        'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.',
      CONTACT_SUBHEADLINE: 'Haben Sie ein Problem zu lösen?',
      CONTACT_DESCRIPTION:
        'Kontaktieren Sie mich über dieses Formular, ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen zu kennen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
      CONTACT_PROMPT:
        'Brauchen Sie einen Frontend-Entwickler? <b>Kontaktieren Sie mich!</b>',
      CONTACT_NAME_PLACEHOLDER: 'Ihr Name',
      CONTACT_EMAIL_PLACEHOLDER: 'Ihre E-Mail',
      CONTACT_MESSAGE_PLACEHOLDER: 'Ihre Nachricht',
      CONTACT_PRIVACY_POLICY: 'Datenschutzerklärung',
      CONTACT_PRIVACY_POLICY_TEXT_1: 'Ich habe die',
      CONTACT_PRIVACY_POLICY_TEXT_2: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      CONTACT_SUBMIT_BUTTON: 'Nachricht senden :)',
      CONTACT_NAME_ERROR: 'Bitte geben Sie Ihren Namen ein',
      CONTACT_EMAIL_ERROR: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      CONTACT_MESSAGE_ERROR: 'Bitte geben Sie eine Nachricht ein',
      CONTACT_PRIVACY_ERROR: 'Bitte akzeptieren Sie die Datenschutzrichtlinie',
      CONFIRM_MESSAGE: 'Vielen Dank für Ihre Nachricht!',
      IMPRINT: 'Impressum',
      IMPRESSUM_HEADER: 'Impressum',
      IMPRESSUM_PARAGRAPH_1: 'Angaben gemäß § 5 DDG',
      IMPRESSUM_PARAGRAPH_2:
        'Oleg Benets <br> Basteigasse 1<br> 95326 Kulmbach <br>',
      IMPRESSUM_PARAGRAPH_3:
        '<strong>Vertreten durch: </strong><br>Oleg Benets<br>',
      IMPRESSUM_CONTACT:'Kontakt',
      IMPRESSUM_PHONE:'Telefon',
      IMPRESSUM_PARAGRAPH_5:
        '<strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>',
      IMPRESSUM_FOOTER: 'Website Impressum von',
      PRIVACY_POLICY: 'Datenschutzerklärung',
      PRIVACY_POLICY_SECTION_1: '1. Datenschutz auf einen Blick',
      GENERAL_INFORMATION: 'Allgemeine Hinweise',
      PRIVACY_GENERAL_INFORMATION: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausfuhrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
      DATA_COLLECTION_ON_THIS_WEBSITE: 'Datenerfassung auf dieser Website',
      DATA_COLLECTION_RESPONSIBLE: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
      PRIVACY_DATA_COLLECTION_RESPONSIBLE: '    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.',
      DATA_COLLECTION_METHODS: 'Wie erfassen wir Ihre Daten?',
      PRIVACY_DATA_COLLECTION_METHODS: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
      PRIVACY_DATA_COLLECTION_TECH: 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
      DATA_USAGE: 'Wofür nutzen wir Ihre Daten?',
      PRIVACY_DATA_USAGE: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
      YOUR_RIGHTS: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
      PRIVACY_YOUR_RIGHTS: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Dateverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
      ANALYSIS_TOOLS: 'Analyse-Tools und Tools von Drittanbietern',
      PRIVACY_ANALYSIS_TOOLS: '    Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.',
      PRIVACY_ANALYSIS_TOOLS_DETAIL: 'Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.',
      HOSTING: '2. Hosting',
      PRIVACY_HOSTING_PROVIDER: 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
      PRIVACY_ALL_INKL: 'Anbieter ist die ALL-INKL.COM - Neue Medien M&uuml;nnich, Inh. Ren&eacute; M&uuml;nnich, Hauptstra&szlig;e 68, 02742 Friedersdorf (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerkl&auml;rung von All-Inkl:',
      PRIVACY_ALL_INKL_CONTRACT: 'Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.',
    });
  }

  /**
   * Initializes the language based on the saved preference or defaults to English.
   * Retrieves the saved language preference from localStorage and sets it as the default language.
   * If no preference is saved, defaults to 'en' (English).
   */
  private initializeLanguage() {
    let savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  /**
   * Switches the application's language and saves the preference in localStorage.
   * @param {string} language - The language code to switch to (e.g., 'en' or 'de').
   */
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  /**
   * List of projects with relevant details.
   * @type {Array<{name: string, img: string, language: string[], description: string, liveUrl: string, githubUrl: string}>}
   */
  projectslist = [
    {
      name: 'Join',
      img: 'Join.png',
      language: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      description: 'JOIN_DESCRIPTION',
      liveUrl: 'https://join-188.developerakademie.net/html',
      githubUrl: 'https://github.com/OlegBenets/join-dummy',
    },
    {
      name: 'Pollo Loco',
      img: 'Pollo loco 1.png',
      language: ['JavaScript', 'HTML', 'CSS'],
      description: 'POLLO_LOCO_DESCRIPTION',
      liveUrl:
        'https://oleg-benets.developerakademie.net/El_Pollo_Loco/index.html',
      githubUrl: 'https://github.com/OlegBenets/El-Pollo-Loco',
    },
    {
      name: 'Pokedex',
      img: 'Pokedex.png',
      language: ['JavaScript', 'HTML', 'CSS', 'Api'],
      description: 'POKEDEX_DESCRIPTION',
      liveUrl:
        'https://oleg-benets.developerakademie.net/Pokedex/PokemonHomePage/index.html',
      githubUrl: 'https://github.com/OlegBenets/Pokedex',
    },
  ];
}
