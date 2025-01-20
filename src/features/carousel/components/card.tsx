import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Img from "../../../assets/Naala_assets/CASA_03_PLANTA_BAJA_1.png";

interface PropertyCardProps {
  name: string;
  image: string;
}

export default function PropertyCard({ name, image }: PropertyCardProps) {
  return (
    <div className="min-w-[33.33%] px-2" style={{ background: "#000" }}>
      <div className="flex flex-col h-full bg-transparent rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative flex-1">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          {/* Overlay with gradient */}
          <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent rounded-lg" />
        </div>
        {/* Content Container */}
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <div className="flex gap-4">
            <Button className="flex-1 py-2 px-4 text-lg bg-[#edddc3] hover:bg-[#edddc3] text-stone-900 font-bold">
              <Link to="/">Personalizar</Link>
            </Button>
            <Button className="flex-1 py-2 px-4 text-lg border-[#edddc3] border-2 text-white hover:bg-white/10 font-bold">
              <Link to="/">Detalles</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
