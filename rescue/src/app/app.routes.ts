import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { AdoptablesComponent } from './adoptables/adoptables';
import { ChatBotComponent } from './chat-bot/chat-bot';
import { ContactoComponent } from './contacto/contacto';
import { DonarComponent } from './donar/donar';
import { LoginComponent } from './login/login';
import { MigapanComponent } from './migapan/migapan';
import { MisionVisionComponent } from './mision-vision/mision-vision';
import { NoticiasComponent } from './noticias/noticias';
import { PerfilesComponent } from './perfiles/perfiles';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad';
import { ProcesoAdopcionComponent } from './proceso-adopcion/proceso-adopcion';
import { RegistroComponent } from './registro/registro';
import { ReportesComponent } from './reportes/reportes';
import { VoluntarioComponent } from './voluntario/voluntario';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'adoptables', component: AdoptablesComponent },
  { path: 'chatbot', component: ChatBotComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'donar', component: DonarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'migapan', component: MigapanComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'proceso-adopcion', component: ProcesoAdopcionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'voluntarios', component: VoluntarioComponent },
  { path: '**', redirectTo: '' }
];
