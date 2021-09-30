import img1 from '../../imgs/1.png'
import img2 from '../../imgs/2.png'
import img3 from '../../imgs/3.png'
import img4 from '../../imgs/4.png'
import img5 from '../../imgs/5.png'
import img6 from '../../imgs/6.png'
import img7 from '../../imgs/7.png'
import img8 from '../../imgs/8.png'
import img9 from '../../imgs/9.png'
import img10 from '../../imgs/10.png'
import img11 from '../../imgs/11.png'
import img12 from '../../imgs/12.png'
import img13 from '../../imgs/13.png'
import img14 from '../../imgs/14.png'
import img15 from '../../imgs/15.png'
import img16 from '../../imgs/16.png'
import img17 from '../../imgs/17.png'
import img18 from '../../imgs/18.png'

const SET_GAME_FIELDS = 'SET_GAME_FIELDS'
const SET_CLICKED_FIELD_ID = 'SET_CLICKED_FIELD_ID'
const RESET_CLICKED_FIELD_ID = 'RESET_CLICKED_FIELD_ID'
const SET_RESULT = 'SET_RESULT'

const initialState = {
    gameFieldsWithIcons: [],
    clickedFieldId: [],
    result: []
}

const gameFieldsWithIconsFromServer = [
    {src: img1, id: 1}, {src: img2, id: 2}, {src: img3, id: 3}, {src: img4, id: 4}, {src: img5, id: 5}, {src: img6, id: 6},
    {src: img7, id: 7}, {src: img8, id: 8}, {src: img9, id: 9}, {src: img10, id: 10}, {src: img11, id: 11}, {src: img12, id: 12},
    {src: img13, id: 13}, {src: img14, id: 14}, {src: img15, id: 15}, {src: img16, id: 16}, {src: img17, id: 17}, {src: img18, id: 18}
]

const randomFields = (arr = [...gameFieldsWithIconsFromServer, ...gameFieldsWithIconsFromServer]) => {
    let randomIndex, element;
    for(let i = arr.length - 1; i > 0; i--){
        randomIndex = Math.floor(Math.random()*(i + 1));
        element = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = element;
    }
    return arr;
}

const gameMemoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_FIELDS:
            return {
                ...state,
                gameFieldsWithIcons: randomFields()
            }
        case SET_CLICKED_FIELD_ID:
            return {
                ...state,
                clickedFieldId: [...state.clickedFieldId, action.id],
            }
        case RESET_CLICKED_FIELD_ID:
            return {
                ...state,
                clickedFieldId: []
            }
        case SET_RESULT:
            return {
                ...state,
                result: [...state.result, action.result]
            }
        default:
            return state
    }
}

export const getGameFieldsAC = (numberOfGameFields) => ({type: SET_GAME_FIELDS, numberOfGameFields})
export const setClickedFieldId = (id) => ({type: SET_CLICKED_FIELD_ID, id})
export const resetClickedFieldId = () => ({type: RESET_CLICKED_FIELD_ID})
export const setResult = (result) => ({type: SET_RESULT, result})

export default gameMemoryReducer