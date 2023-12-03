import { ExpenseFormData } from "../components/Form";
import emailjs from "@emailjs/browser";

const EMAIL_JS_USER_ID = import.meta.env.VITE_REACT_APP_EMAIL_JS_USER_ID;
const EMAIL_JS_TEMPLATE_ID = import.meta.env
  .VITE_REACT_APP_EMAIL_JS_TEMPLATE_ID;
const EMAIL_JS_SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAIL_JS_SERVICE_ID;

export const sendEmail = async (data: ExpenseFormData) => {
  try {
    await emailjs.send(
      EMAIL_JS_SERVICE_ID,
      EMAIL_JS_TEMPLATE_ID,
      data,
      EMAIL_JS_USER_ID
    );
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
