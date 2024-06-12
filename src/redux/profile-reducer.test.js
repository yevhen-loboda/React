import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

it('new post should be added', () => {
    //1.test data
    let action = addPostActionCreator("it-kamasutra");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
          ], 
          
    }
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect( newState.posts.length).toBe(5)
    expect( newState.posts[4].message).toBe("it-kamasutra")
})

it('after deleting length of messages schould be decrement', () => {
    //1.test data
    let action = deletePost(1);
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
          ], 
          
    }
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect( newState.posts.length).toBe(3)
    // expect( newState.posts[4].message).toBe("it-kamasutra")
})

