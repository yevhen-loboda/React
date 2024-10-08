import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
      ], 
      profile: null,
      status: '',
}
const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
              };
              console.log(state,"ututututuuttu")
              return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
           
        }
            
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText,
        //     };
           
        // }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
           
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
           
        }

        case DELETE_POST: {
           
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
           
        }

        case SAVE_PHOTO_SUCCESS: {
           
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
           
        }
           
        default:
            return state;     
    }
    }

    export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

// export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({ type: SET_STATUS, status})
export const deletePost = (postId) => ({ type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos})




export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
      
            dispatch(setUserProfile(response.data));
      
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
       
            dispatch(setStatus(response.data));
     
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    
        if(response.data.resultCode === 0){
            dispatch(setStatus(response.data));
        }    
      
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    
        if(response.data.resultCode === 0){
            dispatch(savePhotoSuccess(response.data.data.photos));
        }    
      
}


    export default profileReducer;