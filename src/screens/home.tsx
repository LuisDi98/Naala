import { Carousel } from "../features/carousel";
import { Card } from "../features/carousel/";
import { Hero } from "../features/hero";
import { modelsData } from "../data/form"; // Import the hardcoded data

// import Img from "../assets/Naala_assets/CASA_03_PLANTA_BAJA_1.png";
import { AspectRatio } from "@chakra-ui/react";

const cards = [
  <Card image={"/modelo-1.png"} name="Card 1" />,
  <Card image={"s"} name="Card 2" />,
  <Card image={"s"} name="Card 3" />,
];
export default function Main() {
  const cards = modelsData.map((model, index) => (
    <Card
      key={index}
      image={"https://via.placeholder.com/300"}
      name={model.model}
    />
  ));

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <Hero />
      <p className="text-5xl">
        Seleccioná el hogar
        <b> que siempre soñaste</b>
      </p>
      <Carousel cards={cards} />
      <p className="text-5xl">
        Ubicacion
      </p>
      <AspectRatio className="w-full h-96" ratio={16 / 9}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1003.9861777624633!2d-84.158927!3d10.0189044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb7fa497690f%3A0x5683d09c534e44d9!2sNaala!5e1!3m2!1ses-419!2scr!4v1737422865889!5m2!1ses-419!2scr" loading="lazy"></iframe>
      </AspectRatio>
      <p className="text-5xl">
        Contacto
      </p>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl">+506 8888-8888</p>
        <p className="text-2xl"/>  
    </div>
    </div>
  );
}
