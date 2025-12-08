import { useEffect, useState } from "react";
import { ConfirmationPopUp } from "../popups/ConfirmationPopUp"

const GA_MEASUREMENT_ID = "GTM-PDZX4KSF"

export const CookieConsent = () => {

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");

    console.log(consent)
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      console.log("HERE")
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (window.gtag) return; // prevent duplicate loading

    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    loadGoogleAnalytics();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <ConfirmationPopUp onConfirm={handleAccept} handleClose={handleDecline} message={"Usamos cookies de google analytics para mejorar tu experiencia de usuario. Puedes aceptar o declinarlas."} />
  )
}
