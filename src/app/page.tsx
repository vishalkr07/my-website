import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Newsletter from "./Components/Newsletter";
import styles from "./styles/Home.module.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <Newsletter />
      <Contact />
    </div>
  );
}