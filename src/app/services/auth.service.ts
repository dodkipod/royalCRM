import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User> = null;
  user: firebase.User = null;
  isLogged: boolean;

  constructor(private afa: AngularFireAuth, private router: Router) {
    this.user$ = this.afa.authState.pipe(shareReplay(1));

    this.user$.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
  }

  createUser(email: string, password: string) {
    this.afa.createUserWithEmailAndPassword(email, password);
    return this.router.navigate(['/customers']);
  }

  loginWithEmail(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    return this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afa.signOut();
  }
}
