import * as path from 'path';
import { Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FIREBASE_ADMIN } from './constants';
import { FirebaseOptions } from './interfaces';



@Injectable()
export class FirebaseService {
  private readonly fAdmin: any;

  constructor(@Inject(FIREBASE_ADMIN) options: FirebaseOptions) {
    this.fAdmin = admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://digifiresurvey.firebaseio.com',
      projectId: 'digifiresurvey',
      serviceAccountId: 'firebase-adminsdk-kkico@digifiresurvey.iam.gserviceaccount.com'
    });
  }

  firestore() {
    return this.fAdmin.firestore();
  }

}