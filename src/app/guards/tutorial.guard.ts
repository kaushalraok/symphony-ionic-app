import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Router,CanActivate }  from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const isComplete = await this.storage.get('tutorialComplete');

    if (!isComplete) {
      this.router.navigateByUrl('/tutorial');
    }
    if (isComplete)
    {
      this.router.navigateByUrl('/login');
    }

    return isComplete;
  }
  
}
