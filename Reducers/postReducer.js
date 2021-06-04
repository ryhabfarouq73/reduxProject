import TYPES from './types'
//how to change state =>posts
//reducer take two params (prev state , action)
//initial state that belong to posts
const initialState ={
    items :[],
    item:{}

}

export default function (state=initialState , action){
//how to change
//if==>fetch
//if==>add
switch(action.type){

case TYPES.FETCH_POST:
    return{
        ...state,
        items: action.payload
    };

    case TYPES.ADD_POST:
        return{
            ...state,
            item:action.payload,
            items:[action.payload,...state.items]//to add new post to existing posts
        };
    
    default:
        return state;
}

}