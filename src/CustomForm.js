// import {useState} from "react";

import styles from "./CustomForm.module.css";

const URL = "http://localhost:8086";

function CustomForm() {
    // const [items, setItems] = useState([]);

    let requestBody = {
        topic: "test"
    }
    const getByFilter = async (event) => {
        event.preventDefault();
        // requestBody.topic = event.target.elements["topic"].value;
        requestBody.start = event.target.elements["date-start"].value + "T00:00:00.000000000";
        requestBody.end = event.target.elements["date-end"].value + "T00:00:00.000000000";
        await fetch(URL + "/v1/event", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then((response) => console.log(response.json()));
    };

    return (
        <form className={styles.form} onSubmit={getByFilter} >
            <div className={styles.line}>
                <label className={styles.label}>Choose Topic</label>
                <input className={styles.input} type={"text"} name={"topic"} placeholder={"Topic"}/>
            </div>
            <div className={styles.line}>
                <label className={styles.label}>Choose Start Date</label>
                <input className={styles.input} type={"date"} name={"date-start"}/>
            </div>
            <div className={styles.line}>
                <label className={styles.label}>Choose End Date</label>
                <input className={styles.input} type={"date"} name={"date-end"}/>
            </div>
            <div className={styles.line}>
                <input type={"submit"} className={styles.button} value={"Get Events"}/>
            </div>
            {/*{items.map((text, index) => <li key={index} id={index.toString()}>{text}</li>)}*/}
        </form>
    );
}

export default CustomForm;