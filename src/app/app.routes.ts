import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { RoleSelectComponent } from './components/role-select/role-select.component.js';


export const routes: Routes = [
  { path: '', component: RoleSelectComponent },
  { path: 'chat/:role', component: ChatComponent }
];