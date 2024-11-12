import Image from "next/image";
// import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Button from "@repo/ui/button";

export default function Home() {
  return (
    <div >
       <Button variant={"primary"} size={"large"}>click</Button>
       <p className="text-4xl text-bold text-blue-900 capitalize">collage</p>
    </div>
  );
}
