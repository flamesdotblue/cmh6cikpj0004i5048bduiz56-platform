import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

let cached = null;

export function getFirebase() {
  if (cached) return cached;

  const env = import.meta.env;
  const cfg = {
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_APP_ID,
  };

  const enabled = Object.values(cfg).every(Boolean);

  if (!enabled) {
    cached = { enabled: false, app: null, auth: null, db: null, storage: null, GoogleProvider: null };
    return cached;
  }

  const app = getApps().length ? getApps()[0] : initializeApp(cfg);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const GoogleProvider = new GoogleAuthProvider();

  cached = { enabled: true, app, auth, db, storage, GoogleProvider };
  return cached;
}
