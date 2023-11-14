import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { verifyCaptcha } from "@/api/serverActions";
import { Button } from "@mui/material";

const ReCaptcha = () => {
  const recaptchaRef = useRef();
  const [isVerified, setIsverified] = useState(false);

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  return (
    <>
      <ReCAPTCHA
        sitekey="6LdhqeInAAAAAGLr9rA8a4Zx0k4K6Ad_1VHxtekV"
        ref={recaptchaRef}
        onChange={handleCaptchaSubmission}
      />
      {/* <Button type="submit" disabled={!isVerified}>
        Submit feedback
      </Button> */}
    </>
  );
};
export default ReCaptcha;
