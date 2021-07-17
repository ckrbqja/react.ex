import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "@fortawesome/fontawesome-free/js/all.js"
import App from "./app"
import SimpleHabit from "./components/habitAdd"

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <SimpleHabit />
    </React.StrictMode>,
    document.getElementById("root")
)
