import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();
const sendEmail = httpsCallable(functions, "sendEmail");

export default sendEmail;
