import Image from "next/image";
import Phone from "@/app/components/Phone";
import Laptop from "./components/Laptop";
import Scooter from "./components/Scooter";
import Game from "./components/Game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg mb-8">This is a simple Next.js app with a 3D phone component.</p>
       

        {/* <Laptop  />  */}
    
        {/* <Scooter /> */}
        {/* Uncomment the following line to include the Phone component */}

        {/* <Phone  /> */}
        <Game />
      </div>
    </main>
  );
}
