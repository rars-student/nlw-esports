import "./styles/main.css";

import logoImg from "./assets/logo-nlw-esports@3x.png";
function App() {
  return (
    <div className="max-w-[344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo eSports" />
      <h1 className="text-6x1 text-white font-black mt-20">Seu duo esta aqui</h1>
    </div>
  );
}

export default App;
