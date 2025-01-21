import { Carousel } from "../features/carousel";
import { Card } from "../features/carousel/";
import { Hero } from "../features/hero";
import { modelsData } from "../data/form";

export default function Main() {
  const cards = modelsData.map((model, index) => (
    <Card
      key={index}
      image={"https://via.placeholder.com/300"}
      name={"steven"}
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
    </div>
  );
}
