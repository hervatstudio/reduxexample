import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
    state = { 
        title: '',
        body: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        // Call action
        this.props.createPost(post);
    }
    render() { 
        return ( 
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Title</label>
                    <br/>
                    <input type="text" name="title" onChange={this.onChange.bind(this)} value={this.state.title}/>
                    <br/>
                    <label>Body</label>
                    <br/>
                    <textarea type="text" name="body" onChange={this.onChange.bind(this)} value={this.state.body}></textarea>
                    <br/>
                    <button type="submit" onSubmit={this.onSubmit.bind(this)}>Submit</button>
                </form>
            </div>
         );
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);