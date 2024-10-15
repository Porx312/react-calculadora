// src/App.tsx
import React, { useRef, useState, useEffect } from "react";
import Display from "./components/Display";
import History from "./components/History";
import Keybord from "./components/Keybord";

const App: React.FC = () => {

  // Función que se ejecuta al hacer scroll


  const refScroll = useRef<HTMLDivElement | null>(null);
  const [scrollCount, setScrollCount] = useState<number>(0);

  // Función para desplazar el contenedor hacia abajo
  const scrollToBottom = () => {
    const container = refScroll.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight, // Desplazarse hasta el final
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  };

  const scrollSecond = () => {
    const container = refScroll.current;

    if (container) {
      const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5; // Un pequeño margen para precisión
      const isScrollingDown = container.scrollTop > 0; // Verifica que no esté en la parte superior

      // Si está en la parte inferior y ha hecho scroll hacia abajo
      if (isAtBottom && isScrollingDown) {
        setScrollCount((prevCount) => prevCount + 1); // Aumentar el contador de scroll

        // Establecer el estado de segundo scroll
        if (scrollCount + 1 === 1) {
          setScrollCount(0); // Restablecer el contador después de detectar el segundo scroll
        }
      }
    }
  };

  useEffect(() => {
    const container = refScroll.current;

    if (container) {
      container.addEventListener('scroll', scrollSecond);

      // Desplazarse a la parte inferior al cargar el componente
      scrollToBottom();

      return () => {
        container.removeEventListener('scroll', scrollSecond); // Limpiar el evento
      };
    }
  }, [scrollCount]);

  return (
    <main className="main">
      <div className="phone" ref={refScroll} >
        <div className="content-app" >
          <History />
          <Display />
          <Keybord />
        </div>
      </div>
    </main>
  );
}

export default App;

