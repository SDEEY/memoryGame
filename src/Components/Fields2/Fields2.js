import {useEffect, useState} from "react";
import s from './Fields.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getGameFieldsAC} from "../../redux/reducers/gameMemory-reducer";
import Timer from "./Timer/Timer";
import ResultsTable from "./ResultsTable/ResultsTable";

export default function Game() {
    const [openedCard, setOpenedCard] = useState([])
    const [matched, setMatched] = useState([])

    const {gameFieldsWithIcons} = useSelector(state => state.gameMemoryReducer)

    const dispatch = useDispatch()

    function showCard(index) {
        setOpenedCard((opened) => [...opened, index])
    }

    useEffect(() => {
        dispatch(getGameFieldsAC())
    }, [])


    useEffect(() => {
        if (openedCard < 2) return;

        const firstMatched = gameFieldsWithIcons[openedCard[0]]
        const secondMatched = gameFieldsWithIcons[openedCard[1]]

        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched, !matched.find(e => e === firstMatched.id) ? firstMatched.id : 'null'])
        }
        // console.log(fieldIsDisabled)
        if (openedCard.length === 2) setTimeout(() => {
            setOpenedCard([])
        }, 5000)
    }, [openedCard])


    return (
        <>
            <Timer matched={matched}/>
            <div className={s.fields}>
                <div className={s.cards}>
                    {gameFieldsWithIcons.map((field, index) => {

                        let isFlipped = false;

                        if (openedCard.includes(index)) isFlipped = true;
                        if (matched.includes(field.id)) isFlipped = true;

                        return (
                            <div className={`${s.animalCard} ${isFlipped ? s.flipped : ''}`}
                                 key={index}
                                 onClick={() => {showCard(index)}}>
                                <div className={s.inner}>
                                    <div className={s.front}>
                                        <img src={field.src}
                                             alt="animal"
                                             width="50"/>
                                    </div>
                                    <div className={s.back}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ResultsTable/>
        </>
    )
}