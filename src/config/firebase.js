import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBq9b38dU3iuv7W65WmwAR8WD3j-LfASyY",
  authDomain: "tiktok---jornada-f97fb.firebaseapp.com",
  projectId: "tiktok---jornada-f97fb",
  storageBucket: "tiktok---jornada-f97fb.appspot.com",
  messagingSenderId: "180958085041",
  appId: "1:180958085041:web:2bc81b1eaf280d4ebd8790"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;