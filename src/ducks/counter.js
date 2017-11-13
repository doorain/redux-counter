// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;

const initialState = {
  currentValue: 0,
  futureValues: [],
  previousValues: []
}
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

 //action creators
export function increment(amount){
  return {
    type: INCREMENT,
    amount: amount
  }
}
export function decrement(amount){
  return {
    type: DECREMENT,
    amount: amount
  }
}
export function undo(){
  type: 'UNDO'

}
export function redo(){
  type: 'REDO'

}

export default function counter(state = initialState, action){
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {currentValue: state.currentValue + action.amount})

    case DECREMENT:
      return Object.assign({}, state, {currentValue: state.currentValue - action.amount})

    default:
      return state

  }
}
