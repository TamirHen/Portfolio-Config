import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import configData from "../config.json";

const { firebaseConfig } = configData;
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const persistence = firebase.auth.Auth.Persistence;
export const db = firebase.database().ref();
