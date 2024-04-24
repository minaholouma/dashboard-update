import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user-service.service';

export const userDataResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
 
 return inject(UserService).getUserDetails(route.paramMap.get('id')!);
};
