import BG from "/Naala_assets/bg-home.jpg";

export default function Hero() {
  return (
    <div
      className="relative flex items-end justify-start w-full h-[70vh] mt-[-23px]"
    >
      {/* Capa de opacidad */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <h1 className="relative text-black text-5xl p-8 pb-40 shadow-2xl z-10">
        Haz tu
        <br />
        <b>hogar único</b>
      </h1>
    </div>
  );
}
