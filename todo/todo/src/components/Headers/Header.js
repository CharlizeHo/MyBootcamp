import React from "react";
import styles from "./Header.module.css"

const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((item, index) => (
        //   <li className={styles.filter}key={index}>
        //     <button
        //       onClick={() => {
        //         onFilterChange(item);
        //       }}
        //     >
        //       {item}
        //     </button>
        //   </li>
        <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === item && styles.selected
              }`}
              onClick={() => {
                onFilterChange(item);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
