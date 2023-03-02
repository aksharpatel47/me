import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.card}>
      <h1>Akshar Patel</h1>
      <h2>Staff Software Engineer</h2>
    </main>
  );
}
