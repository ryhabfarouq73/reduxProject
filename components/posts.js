import React, { Component } from "react";
//1.bring action that you will use
import {fetchPosts} from '../Actions/postActions';
//connect is afunction that wrap export default of the component
import {connect} from 'react-redux';

class Posts extends Component{
  
    componentDidMount(){
   //2.call action
   this.props.fetchPosts();
    }
    render(){
        return(
            <React.Fragment>
                <div class="container text-center">
                <div class="row">
                <h1>posts</h1>
                {  
                   this.props.posts.map (post =>(
                       <div key={post.id} class="col-sm-12 col-md-5 my-3 mx-4 px-3 shadow-lg p-3 mb-5 bg-body rounded" >
                       <h4 class="btn-info">{post.title}</h4>
                       <p>{post.body}</p>
                       </div>  
                   ))
                }
                </div>
                  </div>
              
            </React.Fragment>
        )
    }
}
//4.map state to props
function mapStateToProps(state){
return{
    //gets posts from postreducers
    posts:state.posts.items
}
}
//3.connect
export default connect(mapStateToProps,{fetchPosts}) (Posts);