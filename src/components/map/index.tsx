import React, { useState } from "react";
import styles from "./styles.module.css";

export const MapInfo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.mapContainer}>
      {isLoading && <div className={styles.loadingText}>Carregando...</div>}
      <iframe
        width="100%"
        height="294px"
        frameBorder="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=canoas,%20Rua%20Santos%20Ferreira,%203.070+(Localiza%C3%A7%C3%A3o)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
    </div>
  );
};
<div className={styles.mapContainer}>
  <iframe
    width="100%"
    height="300"
    frameborder="2"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=canoas,%20Rua%20Santos%20Ferreira,%203.070+(Localiza%C3%A7%C3%A3o)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
    <a href="https://www.gps.ie/">gps systems</a>
  </iframe>
</div>;
