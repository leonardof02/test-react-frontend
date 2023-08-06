import React from "react";
import styles from "@/components/Loader.module.css"

export default function Loader() {
    return (
        <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
