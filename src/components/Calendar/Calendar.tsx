import styles from "./Calendar.module.scss";
import { endOfDay, format, getDaysInMonth } from "date-fns";
import { CalendarItem } from "./CalendarItem";

export default function Calendar() {
  const currentDate = format(endOfDay(new Date()), "yyyy/MM/dd");
  const numberDaysCurrentMonth = getDaysInMonth(new Date(currentDate));

  return (
    <section className={styles["calendarWrapper"]}>
      <h1 className={styles["calendar--title"]}>{currentDate}</h1>
      <div className={styles["calendar"]}>
        {[...Array(numberDaysCurrentMonth)].map((_, index) => {
          const currentDay = index + 1;
          return <CalendarItem key={index} day={currentDay} />;
        })}
      </div>
    </section>
  );
}
