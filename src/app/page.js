import Image from "next/image";
import Navbar from "./navbar/navbar";
import Viewport from "./reactflow/viewport";
import "./style.css";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
        <div className="col-span-full">
            <header className="App-header">
               <Navbar />
            </header>
        </div>
        <div className="col-span-2 row-span-2">
            <Viewport />
        </div>
    </div>
  )
}