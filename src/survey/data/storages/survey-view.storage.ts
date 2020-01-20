import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../../commons/vendors/firebase/firestore.service';

@Injectable()
export class SurveyViewStorage {
  constructor(
    private readonly firebaseService: FirebaseService
  ) {
    const db = this.firebaseService.firestore();
    const ref = db.collection('public').doc('0uh39CZs1c38UC7A3vrX');
    let observer = ref.onSnapshot(docSnapshot => {
      console.log(`Received doc snapshot: ${docSnapshot.id}`);
      console.log(`The data is: ${JSON.stringify(docSnapshot.data())}`);
      // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }
}