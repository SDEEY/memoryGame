import {useEffect, useState} from "react";
import s from './Timer.module.css'
import {useDispatch} from "react-redux";
import {setResult} from "../../../redux/reducers/gameMemory-reducer";

export default function Timer({matched}) {
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [timerIsActive, setTimerIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const [qwe, setQwe] = useState(38);


    const dispatch = useDispatch()

    useEffect(() => {
        let intervalId;

        if (timerIsActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const secondsField = secondCounter.toString().length === 1 ? `0${secondCounter}` : secondCounter;
                const minutesField = minuteCounter.toString().length === 1 ? `0${minuteCounter}` : minuteCounter;

                setSeconds(secondsField);
                setMinutes(minutesField);

                setCounter(counter => counter + 1);
            }, 1000)
        }

        return () => clearInterval(intervalId);
    }, [timerIsActive, counter])

    const stopTimer = () => {
        setTimerIsActive(false);
        setCounter(0);
        setSeconds('00');
        setMinutes('00')
    }

    if(matched.filter(e => e !== 'null').length === qwe) {
        stopTimer()
        dispatch(setResult({minutes, seconds}))
        setQwe(100)
    }
    console.log(matched.filter(e => e !== 'null').length)
    return (
        <div className={s.timerContainer}>
            <div>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>
            <button onClick={() => setTimerIsActive(true)}>Start</button>
            <button onClick={stopTimer}>Reset</button>
        </div>
    )
}
