import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.card}>
      <h1>Akshar Patel</h1>
      <h2>Staff Software Engineer</h2>
      <nav>
        <a
          className={styles.code}
          href="https://github.com/aksharpatel47"
          target="_blank"
        >
          GitHub
        </a>
        <br />
        <a
          className={styles.code}
          href="https://www.linkedin.com/in/aksharpatel47"
          target="_blank"
        >
          LinkedIn
        </a>
        <br />
        <a
          className={styles.code}
          href="mailto:akshar.patel.47@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </nav>
    </main>
  );
}
