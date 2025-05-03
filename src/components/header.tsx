import Image from "next/image";
import LogoImg from "/public/logo.svg";
import Link from "next/link";
import SearchIcon from "/public/icon-search.svg";
import Iconuser from "/public/icon-user.svg";
import { GridContainer } from "./grid";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preço promocionais",
  "Sobre Nós",
];

export function Header() {
    const activedStyle = 'bg-green-actived text-opacity-100 rounded-full'

  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex item-center justify-between">
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2 ">
            {arrayMenu.map((item, index) => (
              <Link
                href="#"
                key={index}
                className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${index === 0 ? activedStyle : ""}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image src={SearchIcon} alt="Icon Search" />
            </button>
            <button className="flex items-center gap-2">
              <Image src={Iconuser} alt="Icon user" />
              <span className="text-white font-medium">Fazer Login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
