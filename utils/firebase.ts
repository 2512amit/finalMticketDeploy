import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { IFireBaseConfig } from "../types/firebase.type";
import { FIREBASEAPIKEY, FIREBASEAPPID, FIREBASEAUTHDOMAIN, FIREBASEMEASURMENTID, FIREBASEMESSANGINGSENDERID, FIREBASEPROJECTID, FIREBASESTORAGEBUCKET } from "../config";

const firebaseConfig: IFireBaseConfig = {
  apiKey: FIREBASEAPIKEY || '',
  authDomain: FIREBASEAUTHDOMAIN || '',
  projectId:"mticket-1a9a7",
  storageBucket: FIREBASESTORAGEBUCKET || '',
  messagingSenderId: FIREBASEMESSANGINGSENDERID || '',
  appId: FIREBASEAPPID || '',
  measurementId: FIREBASEMEASURMENTID || ''
};

// Initialize Firebase


export const firebaseApp=async()=>{
    try {
        await firebase.initializeApp(firebaseConfig)
        console.log('firebase started successfully')
        return true
    } catch (error) {
        throw "FAILED TO Initialize Firebase"
    }
}