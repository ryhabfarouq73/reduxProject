import React, { Component } from "react";
//1.connect
import { connect } from 'react-redux';
import { addPost } from '../Actions/postActions'

class PostForm extends Component{
    state ={
        title:'',
        body:''
    };

    handleChange= e => {

    this.setState({[e.target.name]:e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        //Create post object
        const post = {
            title : this.state.title,
            body : this.state.body
        };
        //callback end
        //call action
      this.props.addPost(post);
    
    };

    render(){
        return(
            <React.Fragment>
          <div className="container">
          <h2 className="mt-4">Add Post</h2>
          <form onSubmit={this.handleSubmit}> 
               <div className="mb-3 " >
                    <label for="title" className="my-2">Title</label> <br/>
                    <input className="form-control shadow-none" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                    <label for="Body" className="my-2">Body</label> <br/>
                   <textarea className="form-control shadow-none" value={this.state.body} onChange={this.handleChange} name="body"></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-info btn-lg">Add Post</button>
                </div>
               </form> 
               </div>
            </React.Fragment>
        )
    }
}
// function changeStateToProps(){
//     post:state.post.item
// }
export default connect(null,{addPost})(PostForm);