import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incByAmount } from "../store/features/counterSlice/counterSlice";

const Counter = () => {
    const { value } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const incHandler = () => {
        dispatch(increment());
    }

    const decHandler = () => {
        dispatch(decrement());
    }

    const incByAmountHandler = () => {
        dispatch(incByAmount({ value: 2 }));
    }
    return (
        <div className="counter">
            <h2>Counter</h2>
            <p>counter value: {value}</p>
            <button onClick={incHandler}>increment</button>
            <button onClick={decHandler}>decrement</button>
            <button onClick={incByAmountHandler}>inc by amount</button>
        </div>
    );
}

export default Counter;