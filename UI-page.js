const nodemailer = require('nodemailer');
const twilio = require('twilio');
const firebase = require('firebase/app');
require('firebase/storage');
require('firebase/database');
require('firebase/messaging');
const faceapi = require('face-api.js');

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";
import firebaseConfig from './firebaseConfig.js'; // Importing the external configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage service
const storage = firebase.storage();
const db = firebase.database();
const messaging = firebase.messaging();

// Twilio credentials (remove sensitive information)
const accountSid = ''; // Replace with your Twilio Account SID
const authToken = ''; // Replace with your Twilio Auth Token
const client = require('twilio')(accountSid, authToken);

// ... (rest of the code remains unchanged)
