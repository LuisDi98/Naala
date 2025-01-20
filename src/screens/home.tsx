import { Carousel } from "../features/carousel";
import { Card } from "../features/carousel/";
import { Hero } from "../features/hero";
// import Img from "../assets/Naala_assets/CASA_03_PLANTA_BAJA_1.png";

const cards = [
  <Card image={"s"} name="Card 1" />,
  <Card image={"s"} name="Card 2" />,
  <Card image={"s"} name="Card 3" />,
];
export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <Hero />
      <p className="text-5xl">
        Seleccioná el hogar
        <b> que siempre soñaste</b>
      </p>
      <Carousel cards={cards} />
    </div>
  );
}
