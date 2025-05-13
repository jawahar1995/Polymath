import Image from "next/image";
import Navbar from "./navbar/navbar";
import Viewport from "./reactflow/viewport";
import { DrawerDemo } from "./reactflow/drawer";
import "./style.css";

export default function Home() {
  return (
    <div className="grid-flow-col grid grid-cols-5 gap-1">
        <div className="">
            <header className="App-header">
               <Navbar />
            </header>
        </div>
        <div className="col-span-4">
            <Viewport />
            <DrawerDemo />
        </div>
    </div>
  )
}