import { Carousel } from "../features/carousel";
import { Card } from "../features/carousel/";
import { Hero } from "../features/hero";

const cards = [
  <Card
    image="https://via.placeholder.com/150"
    name="Card 1"
  />,
  <Card
    image="https://via.placeholder.com/150"
    name="Card 2"
  />,
  <Card
    image="https://via.placeholder.com/150"
    name="Card 3"
  />,
];
export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <Hero/>
      <p className="text-5xl">
        Seleccioná el hogar
        <b> que siempre soñaste</b>
      </p>
      <Carousel cards={cards}/>
    </div>
  );
}
