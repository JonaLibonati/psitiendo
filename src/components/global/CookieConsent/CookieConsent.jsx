import { useEffect, useState } from "react";
import { ConfirmationPopUp } from "../popups/ConfirmationPopUp"

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    console.log(consent)
    if (consent === "rejected" || !consent) {
      setShowBanner(true);
    }
    // Ya no llamamos a loadGoogleAnalytics aquí porque el script
    // ahora está fijo en el index.html
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    // Avisamos a Google que el usuario aceptó
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }

    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "rejected");

    // Forzamos el update a denied por si acaso alguna etiqueta se activó
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <ConfirmationPopUp
      onConfirm={handleAccept}
      handleClose={handleDecline}
      message={"Usamos cookies de google analytics para mejorar tu experiencia de usuario. Puedes aceptar o declinarlas."}
    />
  );
};
