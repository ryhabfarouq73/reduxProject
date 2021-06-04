import TYPES from '../Reducers/types';
//action creators
export function fetchPosts (){
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        //return promise object into js object using json function
        .then((res)=>res.json())
        .then(data=>dispatch({
            type:TYPES.FETCH_POST,
            payload:data
        }))
    }
}
//add  post
export function addPost(post){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
        body:JSON.stringify(post)       
     })
     .then(res => res.json())
     .then(data => dispatch({
         type:TYPES.ADD_POST,
         payload:data
     }))
    }
}