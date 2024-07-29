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
      CONTACT_PRIVACY_POLICY_TEXT_2:
        'and agree to the processing of my data as outlined.',
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
      IMPRESSUM_CONTACT: 'Contact',
      IMPRESSUM_PHONE: 'Phone',
      IMPRESSUM_PARAGRAPH_5:
        '<strong>Disclaimer: </strong><br><br><strong>Liability for content</strong><br><br>The contents of our pages were created with the utmost care. However, we cannot guarantee the correctness, completeness, and up-to-dateness of the content. As a service provider, we are responsible for our own content on these pages under general laws according to § 7 Abs.1 DDG. However, according to §§ 8 to 10 DDG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard is only possible from the point in time at which we become aware of a specific legal infringement. Upon becoming aware of corresponding legal violations, we will remove these contents immediately.<br><br><strong>Liability for links</strong><br><br>Our offer contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot assume any responsibility for these external contents. The provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. A permanent content control of the linked pages is, however, not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, we will remove such links immediately.<br><br><strong>Data protection</strong><br><br>The use of our website is usually possible without providing personal data. Insofar as personal data (for example, name, address, or email addresses) is collected on our pages, this is always done, as far as possible, on a voluntary basis. These data will not be passed on to third parties without your explicit consent. <br>We point out that data transmission over the Internet (e.g., when communicating via email) can have security vulnerabilities. A complete protection of the data against access by third parties is not possible. <br>The use of contact data published within the framework of the imprint obligation by third parties for the purpose of sending not explicitly requested advertising and information materials is hereby expressly excluded. The operators of the pages reserve the right to take legal action in the event of the unsolicited sending of advertising information, for example through spam emails.<br>',
      IMPRESSUM_FOOTER: 'Website imprint from',
      PRIVACY_POLICY: 'Privacy Policy',
      PRIVACY_POLICY_TEXT_1: `<h2>1. Data Protection at a Glance</h2><h3>General Information</h3><p>The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.</p><h3>Data Collection on This Website</h3><h4>Who is Responsible for Data Collection on This Website?</h4> <p>The data processing on this website is carried out by the website operator. Their contact details can be found in the section "Notice on the Responsible Body" in this privacy policy.</p>
      <h4>How Do We Collect Your Data?</h4><p>Your data is collected, on the one hand, by you providing it to us. This can be, for example, data that you enter into a contact form.</p><p>Other data is collected automatically or with your consent when you visit the website through our IT systems. This is mainly technical data (e.g., internet browser, operating system, or time of the page visit). This data is collected automatically as soon as you enter this website.</p>
      <h4>What Do We Use Your Data For?</h4><p>Part of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior.</p>
      <h4>What Rights Do You Have Regarding Your Data?</h4><p>You have the right to obtain information free of charge about the origin, recipient, and purpose of your stored personal data at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. Additionally, you have the right to lodge a complaint with the competent supervisory authority.</p><p>For this and further questions on the topic of data protection, you can contact us at any time.</p>
      <h3>Analysis Tools and Third-Party Providers</h3><p>When you visit this website, your browsing behavior may be statistically analyzed. This is done mainly with so-called analysis programs.</p><p>Detailed information about these analysis programs can be found in the following privacy policy.</p>`,
      HOSTING: `  <h2>2. Hosting</h2><p>We host the content of our website with the following provider:</p>
      <h3>All-Inkl</h3><p>The provider is ALL-INKL.COM - Neue Medien Münnich, owned by René Münnich, Hauptstraße 68, 02742 Friedersdorf (hereinafter All-Inkl). Details can be found in the privacy policy of All-Inkl:</p>`,
      HOSTING_TEXT: `<p>The use of All-Inkl is based on Art. 6 para. 1 lit. f GDPR. We have a legitimate interest in the most reliable representation of our website. If consent was obtained, the processing is carried out solely on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies or access to information on the user's end device (e.g., device fingerprinting) within the meaning of the TTDSG. Consent can be revoked at any time.</p>
      <h4>Order Processing</h4><p>We have concluded a contract for order processing (AVV) for the use of the above-mentioned service. This is a data protection legally required contract that ensures that this party processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.</p>`,
      PRIVACY_GENERAL_INFO: `<h2>3. General Notes and Mandatory Information</h2>
  <h3>Data Protection</h3><p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p><p>When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains which data we collect and how we use it. It also explains how and for what purpose this happens.</p><p>We would like to point out that data transmission over the Internet (e.g., when communicating via email) may have security vulnerabilities. A complete protection of the data from access by third parties is not possible.</p>
  <h3>Notice on the Responsible Body</h3><p>The responsible body for data processing on this website is:</p><p>Oleg Benets<br /> Basteigasse 1<br /> 95326 Kulmbach</p><p>Phone: 0172 8183955<br /> Email: oleg.benets&#64;web.de</p><p>The responsible body is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).</p>
  <h3>Storage Duration</h3><p>Unless a more specific storage duration is mentioned within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you make a legitimate deletion request or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.</p>
  <h3>General Notes on the Legal Basis of Data Processing on This Website</h3><p>If you have given consent to data processing, we process your personal data based on Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR if special categories of data are processed according to Art. 9 para. 1 GDPR. In the case of an explicit consent to the transfer of personal data to third countries, data processing also occurs on the basis of Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or to access information on your end device (e.g., via device fingerprinting), data processing additionally takes place based on § 25 para. 1 TTDSG. Consent can be revoked at any time. If your data is required for the performance of a contract or for the implementation of pre-contractual measures, we process your data based on Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if it is required to fulfill a legal obligation based on Art. 6 para. 1 lit. c GDPR. Data processing may also occur based on our legitimate interests according to Art. 6 para. 1 lit. f GDPR. The relevant legal basis for each case will be explained in the following paragraphs of this privacy policy.</p>
  <h3>Recipients of Personal Data</h3><p>In the course of our business activities, we work with various external entities. This sometimes requires the transfer of personal data to these external entities. We only pass on personal data to external entities if this is necessary for the performance of a contract, if we are legally obliged to do so (e.g., data transfer to tax authorities), if we have a legitimate interest according to Art. 6 para. 1 lit. f GDPR in the transfer, or if another legal basis permits the data transfer. When using processors, we only pass on personal data to our customers based on a valid contract for order processing. In the case of joint processing, a contract for joint processing is concluded.</p>
  <h3>Revocation of Your Consent to Data Processing</h3><p>Many data processing operations are only possible with your express consent. You can revoke any consent already given at any time. The legality of the data processing carried out up to the revocation remains unaffected by the revocation.</p>
  <h3>Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)</h3><p>IF THE DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME, ON GROUNDS RELATED TO YOUR PARTICULAR SITUATION, TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RELEVANT LEGAL BASIS FOR WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS OR THE PROCESSING IS FOR THE ESTABLISHMENT, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION UNDER ART. 21 PARA. 1 GDPR).</p><p>IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH MARKETING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION UNDER ART. 21 PARA. 2 GDPR).</p>
  <h3>Right to Lodge a Complaint with the Competent Supervisory Authority</h3><p>In the event of violations of the GDPR, affected individuals have the right to lodge a complaint with a supervisory authority, particularly in the member state of their habitual residence, their place of work, or the place of the alleged infringement. The right to lodge a complaint exists without prejudice to any other administrative or judicial remedies.</p>
  <h3>Right to Data Portability</h3><p>You have the right to request that data which we process based on your consent or in fulfillment of a contract be handed over to you or to a third party in a commonly used, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done if technically feasible.</p>
  <h3>Access, Rectification, and Deletion</h3><p>You have the right to obtain information free of charge about your stored personal data, its origin, recipients, and the purpose of data processing at any time, as well as the right to rectification or deletion of this data, if applicable. For this and further questions regarding personal data, you can contact us at any time.</p>
  <h3>Right to Restriction of Processing</h3><p>You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:</p>
  <ul>
    <li>If you dispute the accuracy of your personal data stored with us, we generally need time to verify this. For the duration of the review, you have the right to request the restriction of the processing of your personal data.</li>
    <li>If the processing of your personal data has occurred/is occurring unlawfully, you can request the restriction of data processing instead of deletion.</li>
    <li>If we no longer need your personal data but you need it to assert, exercise, or defend legal claims, you have the right to request the restriction of processing your personal data instead of deletion.</li>
    <li>If you have lodged an objection under Art. 21 para. 1 GDPR, a balance must be struck between your and our interests. As long as it is not yet clear whose interests outweigh, you have the right to request the restriction of the processing of your personal data.</li>
  </ul>
  <p>If you have restricted the processing of your personal data, this data – apart from storage – may only be processed with your consent or for the establishment, exercise, or defense of legal claims or to protect the rights of another natural or legal person or for reasons of significant public interest of the European Union or a member state.</p>
  <h3>SSL or TLS Encryption</h3><p>This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator. An encrypted connection is indicated by the browser address line changing from "http://" to "https://" and by the lock symbol in your browser line.</p><p>When SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.</p>`,
      DATA_COLLECTION: `<h2>4. Data Collection on This Website</h2>
  <h3>Server Log Files</h3><p>The provider of the pages collects and stores information automatically in so-called server log files, which your browser transmits to us automatically. These are:</p><ul><li>Browser type and browser version</li> <li>Operating system used</li> <li>Referrer URL</li> <li>Hostname of the accessing computer</li> <li>Time of the server request</li> <li>IP address</li></ul><p>This data is not merged with other data sources.</p><p>The collection of this data is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of their website – for this, server log files must be collected.</p>
  <h3>Contact Form</h3><p>If you send us inquiries via the contact form, the information you provide in the inquiry form, including the contact details you provide there, will be stored by us for the purpose of processing the inquiry and for follow-up questions. We do not pass this data on without your consent.</p><p>The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective handling of inquiries directed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if it has been requested; consent can be revoked at any time.</p><p>The data you enter in the contact form remains with us until you request its deletion, revoke your consent to storage, or the purpose for storing the data no longer applies (e.g., after processing your inquiry). Mandatory legal provisions – especially retention periods – remain unaffected.</p>
  <h3>Inquiries via Email, Phone, or Fax</h3><p>If you contact us via email, phone, or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of handling your request. We do not pass this data on without your consent.</p><p>The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective handling of inquiries directed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if it has been requested; consent can be revoked at any time.</p><p>The data you send to us via contact inquiries remains with us until you request its deletion, revoke your consent to storage, or the purpose for storing the data no longer applies (e.g., after handling your request). Mandatory legal provisions – especially statutory retention periods – remain unaffected.</p>`,
      PRIVACY_POLICY_SOURCE: 'Source:',
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
      CONTACT_PRIVACY_POLICY_TEXT_2:
        'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
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
      IMPRESSUM_CONTACT: 'Kontakt',
      IMPRESSUM_PHONE: 'Telefon',
      IMPRESSUM_PARAGRAPH_5:
        '<strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>',
      IMPRESSUM_FOOTER: 'Website Impressum von',
      PRIVACY_POLICY: 'Datenschutzerklärung',
      PRIVACY_POLICY_TEXT_1: `<h2>1. Datenschutz auf einen Blick</h2><h3>Allgemeine Hinweise</h3><p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p><h3>Datenerfassung auf dieser Website</h3><h4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.</p>
  <h4>Wie erfassen wir Ihre Daten?</h4><p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p><p> Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
  <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4><p> Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
  <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4><p>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p><p> Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
  <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3><p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p><p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>`,
      HOSTING: `  <h2>2. Hosting</h2><p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
  <h3>All-Inkl</h3><p>Anbieter ist die ALL-INKL.COM - Neue Medien M&uuml;nnich, Inh. Ren&eacute; M&uuml;nnich, Hauptstra&szlig;e 68, 02742 Friedersdorf (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerkl&auml;rung von All-Inkl:</p>`,
      HOSTING_TEXT: `<p>Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
  <h4>Auftragsverarbeitung</h4><p>Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>`,
      PRIVACY_GENERAL_INFO: `<h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
  <h3>Datenschutz</h3><p> Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p><p> Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p><p> Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
  <h3>Hinweis zur verantwortlichen Stelle</h3><p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p><p>Oleg Benets<br /> Basteigasse 1<br /> 95326 Kulmbach</p><p>Telefon: 0172 8183955<br /> E-Mail: oleg.benets&#64;web.de</p><p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>
  <h3>Speicherdauer</h3><p>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.</p>
  <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3><p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.</p>
  <h3>Empfänger von personenbezogenen Daten</h3><p>Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.</p>
  <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3><p>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
  <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3><p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p><p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
  <h3>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3><p>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
  <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3><p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
  <h3>Auskunft, Berichtigung und L&ouml;schung</h3><p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
  <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3><p>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p>
  <ul>
    <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li>
    <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
  </ul>
  <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
  <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3><p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p><p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>`,
      DATA_COLLECTION: `<h2>4. Datenerfassung auf dieser Website</h2>
  <h3>Server-Log-Dateien</h3><p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:</p><ul><li>Browsertyp und Browserversion</li> <li>verwendetes Betriebssystem</li> <li>Referrer URL</li> <li>Hostname des zugreifenden Rechners</li> <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li></ul><p>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p><p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.</p>
  <h3>Kontaktformular</h3><p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p><p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p><p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>
  <h3>Anfrage per E-Mail, Telefon oder Telefax</h3><p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p><p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p><p>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>`,
      PRIVACY_POLICY_SOURCE: 'Quelle:',
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
      liveUrl: 'https://join.oleg-benets.dev/',
      githubUrl: 'https://github.com/OlegBenets/join-dummy',
    },
    {
      name: 'Pollo Loco',
      img: 'Pollo loco 1.png',
      language: ['JavaScript', 'HTML', 'CSS'],
      description: 'POLLO_LOCO_DESCRIPTION',
      liveUrl:
        'https://el-pollo-loco.oleg-benets.dev/',
      githubUrl: 'https://github.com/OlegBenets/El-Pollo-Loco',
    },
    {
      name: 'Pokedex',
      img: 'Pokedex.png',
      language: ['JavaScript', 'HTML', 'CSS', 'Api'],
      description: 'POKEDEX_DESCRIPTION',
      liveUrl:
        'https://pokedex.oleg-benets.dev/',
      githubUrl: 'https://github.com/OlegBenets/Pokedex',
    },
  ];
}
