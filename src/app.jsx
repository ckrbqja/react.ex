import Habits from "./components/habits"
import "./app.css"
import React, { PureComponent } from "react"
import NavBar from "./components/navBar"

class app extends PureComponent {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Reading", count: 0 },
            { id: 3, name: "Reading", count: 0 },
        ],
    }

    handleIncrement = (habit) => {
        // const habits = [...this.state.habits]
        // const index = habits.indexOf(habit)
        // habits[index].count++
        // this.setState({ habits })

        const habits = this.state.habits.map((item) => {
            if (habit.id === item.id) return { ...habit, count: habit.count + 1 }
            return item
        })
        this.setState({ habits })
    }

    handleDecrement = (habit) => {
        // console.log({ habit })
        // const habits = [...this.state.habits]
        // const index = habits.indexOf(habit)
        // if (habits[index].count > 0) habits[index].count--
        // this.setState({ habits })

        const habits = this.state.habits.map((item) => {
            const count = habit.count
            if (habit.id === item.id) return { ...habit, count: count > 0 ? count - 1 : count }
            return item
        })
        this.setState({ habits })
    }

    handleDelete = (habit) => {
        console.log({ habit })
        // const habits = this.state.habits.filter((a) => a.id !== habit.id)
        // this.setState({ habits })
    }

    handleAdd = (name) => {
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]
        this.setState({ habits })
    }

    handleReset = () => {
        const habits = this.state.habits.map((a) => {
            a.count = 0
            return a
        })
        this.setState({ habits })
    }

    render() {
        return (
            <>
                <NavBar totalCount={this.state.habits.filter((i) => i.count > 0).length} />
                <Habits
                    habits={this.state.habits}
                    onAdd={this.handleAdd}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                />
            </>
        )
    }
}

export default app
