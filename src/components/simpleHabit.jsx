import React, { Component, useEffect, useState } from "react"

import React from "react"

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0)
    // const spanRef = React.createRef()
    const spanRef = useRef()

    const handleIncrement = useCallback(() => {
        setCount({ count: count + 1 })
    })

    useEffect(() => {
        console.log("gd")
    }, [])

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">
                Reading
            </span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    )
}

export default SimpleHabit
