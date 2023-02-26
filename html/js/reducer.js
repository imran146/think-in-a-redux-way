import { validateInputValue } from "./util.js";

const DEFAULT_COUNT = 120;

// initial state
const initialState = {
    defaultCount: DEFAULT_COUNT,
    countsArray: [
        {
            index: 0,
            count: DEFAULT_COUNT,
        }
    ],
    emmitedIndex: 0,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":{  
            const clonedCountsArray = structuredClone(state.countsArray);
            const targetedCountObj = clonedCountsArray[action.payload.index];
            console.log(targetedCountObj)
            console.log(action.payload.index)
            clonedCountsArray[action.payload.index].count = validateInputValue(targetedCountObj.count + parseInt(action.payload.value));
            return {
                ...state,
                countsArray: clonedCountsArray,
              };
        };
        case "DECREMENT": {
            const clonedCountsArray = structuredClone(state.countsArray);
            const targetedCountObj = clonedCountsArray[action.payload.index];

            clonedCountsArray[action.payload.index].count = validateInputValue(targetedCountObj.count - parseInt(action.payload.value))

            return {
                ...state,
                  count: validateInputValue(state.count - parseInt(action.payload.value)),
                  countsArray: clonedCountsArray,
              };
        };
        case "ADD_MATCH":{
            const clonedCountsArray = structuredClone(state.countsArray);
            clonedCountsArray.push({
                index: action.payload, 
                count: DEFAULT_COUNT
            })
            return {
                ...state,
                countsArray: clonedCountsArray,
            }
        }
        case "RESET":
            const clonedState = structuredClone(state);
            return {...clonedState, countsArray: clonedState.countsArray.map(item => ({...item, count: 120}))};
        default:
            return state;
    }
};

export { reducer };