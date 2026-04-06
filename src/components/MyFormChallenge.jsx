import { useState } from "react";
import BoxColor from "./BoxColor";

function MyForm() {
  const [value, setValue] = useState("");

  const colors = [
    "red",
    "green",
    "pink",
    "yellow",
    "purple",
    "white",
    "blue",
    "aqua",
    "olive",
  ];

  return (
    <>
      <div>
        <h2>Buscador de colores</h2>
        <input
          type="text"
          placeholder="Añade un color..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm;