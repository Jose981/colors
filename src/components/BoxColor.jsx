import { useRef, useEffect } from "react";

function BoxColor({ color, value }) {
  const boxRef = useRef();

  // español → inglés
  const colorMap = {
    rojo: "red",
    verde: "green",
    rosa: "pink",
    amarillo: "yellow",
    morado: "purple",
    blanco: "white",
    azul: "blue",
    aqua: "aqua",
    oliva: "olive",
  };

  // inglés → español
  const reverseMap = {
    red: "rojo",
    green: "verde",
    pink: "rosa",
    yellow: "amarillo",
    purple: "morado",
    white: "blanco",
    blue: "azul",
    aqua: "aqua",
    olive: "oliva",
  };

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const input = value.trim().toLowerCase();
    const translated = colorMap[input] || input;

    if (translated === color) {
      box.style.backgroundColor = color;

      // 🔥 mostramos en español
      box.textContent = `¡Soy ${reverseMap[color]}!`;
    } else {
      box.style.backgroundColor = color;
      box.textContent = `No soy ${value}`;
    }
  }, [value, color]);

  return (
    <div
      ref={boxRef}
      className="box"
      style={{ backgroundColor: color}}
    >
      No soy ${reverseMap[color]}
    </div>
  );
}

export default BoxColor;