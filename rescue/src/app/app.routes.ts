import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { Adoptables } from './adoptables/adoptables';
import { ChatbotComponent } from './chat-bot/chat-bot';
import { DonarComponent } from './donar/donar';
import { MigapanComponent } from './migapan/migapan';
import { MisionVisionComponent } from './mision-vision/mision-vision';
import { PerfilesComponent } from './perfiles/perfiles';
import { PoliticaPrivacidad } from './politica-privacidad/politica-privacidad';
import { ProcesoAdopcionComponent } from './proceso-adopcion/proceso-adopcion';
import { RegistroComponent } from './registro/registro';
import { ReportesComponent } from './reportes/reportes';
import { VoluntarioComponent } from './voluntario/voluntario';
import { Contacto } from './contacto/contacto';
import { Login } from './login/login';
import { Estadisticas } from './estadisticas/estadisticas';


export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'adoptables', component: Adoptables },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'donar', component: DonarComponent },
  { path: 'login', component: Login },
  { path: 'migapan', component: MigapanComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'proceso-adopcion', component: ProcesoAdopcionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'voluntarios', component: VoluntarioComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidad },
  { path: 'contacto', component: Contacto },
    { path: 'estadisticas', component: Estadisticas},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

