import {useSelector} from "react-redux";
import s from './ResultsTable.module.css'

export default function ResultsTable() {
    const {result} = useSelector(state => state.gameMemoryReducer)

    return (
        <div className={s.container}>
            <h3>Results table</h3>
            {result.map(r => {
                return <div>
                        <span>{r.minutes}</span>
                        <span>:</span>
                        <span>{r.seconds}</span>
                </div>
            })}
        </div>
    )
}