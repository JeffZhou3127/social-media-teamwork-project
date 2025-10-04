import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
    return (
        <>
            <header className={styles.header}>
              <h1 className={styles.h1}>Hello, World!!!</h1>
            </header>
            <main className={styles.main}><Outlet /></main>
        </>
    );
};


export default AppLayout;
