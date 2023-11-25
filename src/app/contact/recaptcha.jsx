"use client";
import { verfiyCaptcha } from "@/api/captcha";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = forwardRef((props, ref) => {
  const recaptchaRef = useRef();
  const [isVerified, setIsverified] = useState(false);

  async function handleCaptchaSubmission(token) {
    await verfiyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
    // Server function to verify captcha
  }

  useImperativeHandle(ref, () => ({
    verified: isVerified,
  }));

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
});

ReCaptcha.displayName = "ReCaptcha";

export default ReCaptcha;
