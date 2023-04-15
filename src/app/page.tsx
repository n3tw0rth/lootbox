import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[#00B295]">
        <div className="mx-auto flex h-auto w-2/3 flex-col pt-36">
          <div className="h-10 w-full">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}
