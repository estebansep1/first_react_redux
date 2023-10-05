import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counterSlice.js'

export default function Counter() {
    const [input, setInput] = useState(0)
    const count = useSelector(state => state.value)
    const dispatch = useDispatch()

    const byAmountSubmit = e => {
        e.preventDefault()
        dispatch(incrementByAmount(+input))
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}