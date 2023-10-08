import styles from "./CalendarItem.module.scss";

type Props = {
  day: number;
};

export const CalendarItem = ({ day }: Props) => {
  return (
    <div className={styles["itemWrapper"]}>
      <div className={styles["item"]}>
        <p className={styles["item--day"]}>{day}</p>
        <div className={styles["item--circle"]}></div>
      </div>
    </div>
  );
};
