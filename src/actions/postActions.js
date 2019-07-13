import { FETCH_POSTS, NEW_POST } from '../actions/type';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    )
    
}

export const createPost = postData => dispatch => {
    const headers = {
        'Content-Type': 'application/json'
    }
    const body = {
        body: JSON.stringify(postData)
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post=> {
        dispatch({
            type: NEW_POST,
            payload: post
        })
    })
}