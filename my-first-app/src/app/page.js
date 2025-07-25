'use client'
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter()
  return (
    <main>
      <button type="button" onClick={()=>Router.push("/class")}> Go to the Page</button>
    </main>
  );
}
