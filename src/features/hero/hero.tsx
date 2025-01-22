import BG from "../../assets/Naala_assets/bg_1.png";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { data } from "../../index.css"
export default function Hero() {
  return (
    <div className="relative flex items-end justify-start w-full h-[81vh]">
      {/* Background with opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(" + BG + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9,
          zIndex: -1,
        }}
      ></div>

      {/* Overlay for darker background */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-white text-5xl p-8 pb-40 shadow-2xl">
          Haz tu
          <br />
          <b>hogar único</b>
        </h1>
        <Button className="flex-1 p-8 text-lg bg-[#edddc3] hover:bg-[#edddc3] text-stone-900 font-bold">
          <Link to="/">Modelos</Link>
        </Button>
        <p className="text-center text-white">
          Si bien nos esforzamos por ofrecer visualización precisa en el configurador, algunas opciones pueden no representarse correctament en este momento.
        </p>
      </div>
    </div>
  );
}
