import styles from "./app.module.scss";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <main className={styles["app"]}>
      <Calendar />
    </main>
  );
}

export default App;
