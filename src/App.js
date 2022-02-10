import "./App.css";
import { useState } from "react";
import Botones from "./Botones";
import Input from "./Input";
import Borrar from "./Borrar";
import { getByText } from "@testing-library/react";

export default function App() {
  //creamos una variable text que es donde se guardara los primeros numeros
  const [text, setText] = useState("");
  //creamos una variable text que es donde se guardara los primeros numeros
  const [text2, setText2] = useState("");

  //funcion que actualiza los números por pantalla
  function changeText() {
    text.setText();
  }
  return (
    <div className="contorno">
      {""}
      <Input nouNum={text}></Input>
      <body>
        <section>
          <Botones></Botones>
          <button onClick={changeText}>8</button>
          <button>9</button>
        </section>
        <section>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </section>
        <section>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
        </section>
        <section>
          <button>+</button>
          <button>-</button>
        </section>
        <section>
          <Borrar></Borrar>
        </section>
      </body>
    </div>
  );
}
