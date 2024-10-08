import React, { useState } from "react";

interface MapProps {
  position?: [number, number]; // Tornando opcional já que não está sendo usado
}

export const MapInfo: React.FC<MapProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-[300px] w-[300px] m-[10px] border-[3px] border-pink-500">
      {isLoading && (
        <div className="flex justify-center items-center h-[300px] text-[20px] font-sans">
          Carregando...
        </div>
      )}
      <iframe
        width="100%"
        height="294px"
        frameBorder="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=pt-BR&amp;q=canoas,%20Rua%20Santos%20Ferreira,%203.070+(Localiza%C3%A7%C3%A3o)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        onLoad={() => setIsLoading(false)}
        className={isLoading ? "hidden" : "block"}
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
    </div>
  );
};
