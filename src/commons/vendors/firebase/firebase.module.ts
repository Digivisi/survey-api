import { DynamicModule, Module } from '@nestjs/common';
import { FirebaseService } from './firestore.service';
import { FIREBASE_ADMIN } from './constants';

export interface FirebaseOptions {
  serviceAccountJsonFile: string;
}

@Module({})
export class FirebaseModule {
  static forRoot(options: FirebaseOptions): DynamicModule {
    return {
      module: FirebaseModule,
      providers: [
        {
          provide: FIREBASE_ADMIN,
          useValue: options,
        },
        FirebaseService,
      ],
      exports: [FirebaseService],
    };
  }
}