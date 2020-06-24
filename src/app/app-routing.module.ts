import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard'

const routes: Routes = [
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'outing', loadChildren: './pages/outing/outing.module#OutingPageModule' },
  { path: 'modalpage', loadChildren: './pages/modalpage/modalpage.module#ModalpagePageModule' },
  { path: 'request', loadChildren: './pages/request/request.module#RequestPageModule' },
  { path: 'outingrequest', loadChildren: './pages/outingrequest/outingrequest.module#OutingrequestPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
