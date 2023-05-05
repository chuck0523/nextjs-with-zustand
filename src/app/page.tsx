import styles from "./page.module.scss";
import variables from "@/styles/variables.module.scss";
import Link from "next/link";
import DisplayName from "./components/User/DisplayName";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p style={{ color: variables.primaryColor }}>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <DisplayName />

      <Link href="/user">Go to User Page</Link>
    </main>
  );
}
