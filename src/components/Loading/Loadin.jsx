import React from "react";
import styles from "./loading.module.css"
import image from "../../assets/img/loading.jpeg"

const Loading = () => {
return(
    <div>
        <img className={styles.imgLoading} src={image} alt="Loading..." />
    </div>
)
}

export default Loading