import Image from "next/image";
import { Menu } from "./top-bar";
import { StalySpot } from "./piwko/staly-spocik";
import { NowySpot } from "./piwko/nowy-spot";

export default function Home() {
  return (
    <>
      <section className="flex flex-row justify-between flex-wrap gap-x-2 h-screen font-sans">
        <div className="mx-5 my-3 h-fit min-h-50 grow-0 shrink w-fit">
          <Image
            src={"/pp-logo.svg"}
            alt="Logo Piwo-Paliwo 2.0"
            width={50}
            height={50}
          />
        </div>
        <div className="grid mr-5 my-3 h-fit grow-0 w-fit">
          <Menu />
        </div>
        <div className="grow w-full">
          <div className="text-7xl h-max py-24 text-center grow w-full cursor-default">
            Piwko?
          </div>
          <div className="flex flex-row gap-12 justify-center w-full center">
            <StalySpot />
            <NowySpot />
          </div>
        </div>
      </section>
    </>
  );
}
