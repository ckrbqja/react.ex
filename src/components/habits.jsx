import React, { PureComponent } from "react"
import Habit from "./habit"
import HabitAdd from "./habitAdd"

class Habits extends PureComponent {
    render() {
        const { onIncrement, onDecrement, onDelete, onAdd, onReset } = this.props
        return (
            <>
                <HabitAdd onAdd={onAdd} />
                <ul>
                    {this.props.habits.map((habit) => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onDelete={onDelete}
                            onReset={onReset}
                        />
                    ))}
                </ul>
                <button className="habit-button" onClick={onReset}>
                    <i className="fas fa-reset"></i>
                </button>
            </>
        )
    }
}

export default Habits
