"use server";

import axios from "axios";

export async function verifyCaptcha(token) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LdhqeInAAAAAGLr9rA8a4Zx0k4K6Ad_1VHxtekV&response=${token}`
  );
  if (res.data.success) {
    return "success!";
  } else {
    throw new Error("Failed Captcha");
  }
}
