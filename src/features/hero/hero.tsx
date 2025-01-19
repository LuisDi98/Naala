import BG from "../../assets/Naala_assets/bg-home.jpg";
export default function Hero() {
  return (
    <div
      className="flex items-end justify-start w-full h-[70vh] mt-[-23px]"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        <h1 className="text-white text-5xl p-8 pb-40 shadow-2xl">
            Haz tu
            <br />
            <b>
                hogar único
            </b>
        </h1>
        <p className="text-center text-white">
            En Naala, encontrarás la casa de tus sueños, con la mejor calidad y
        </p>
    </div>
  );
}
