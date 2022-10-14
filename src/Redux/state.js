const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let store = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: "Some text one", likeCount: 5},
                {id: 2, message: "Some text two", likeCount: 18},
                {id: 3, message: "Some text three", likeCount: 0},
                {id: 4, message: "Some text four", likeCount: 10},
                {id: 5, message: "Some text five", likeCount: 7},
            ],

            // newPostText: '',
        },

        dialogsPage: {
            users: [
                {id:1, name: "John", message: 'Hello, dear friend!'},
                {id:2, name: "Kate", message: 'Hi, how are you?'},
                {id:3, name: "Travis", message: "What's up?"},
                {id:4, name: "Peter", message: 'Nice to meet you'},
                {id:5, name: "Joan", message: 'Hello!'}
            ]
        },

        friendsPage: {
        }
    },

    _callSubscriber () {
        console.log('change state');
    },

    getState() {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    addPost () {
        // let newPost = {
        //     id: 6,
        //     message: this._state.profilePage.newPostText,
        //     likeCount: 0
        // }
        //
        // this._state.profilePage.newPostText = "";
        // this._state.profilePage.posts.push(newPost);
        // this._callSubscriber(this._state);
    },

    // updateNewPostText (newText) {
    //     this._state.profilePage.newPostText = newText;
    // },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.newPostText = '';
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    }
}

window.state = store;
export default store;