import * as ActionTypes from './actionTypes';
const baseUrl= 'http://localhost:8000'

export const requestRegister = (creds) => {
    return {
        type: ActionTypes.REGISTER_REQUEST,
        creds
    }
}

export const receiveRegister = () => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
        
        
    }
}

export const registerError = (message) => {
    return {
        type: ActionTypes.REGISTER_FAILURE,
        message
    }
}

export const registerUser = (creds) => (dispatch) => {
    // We dispatch requestRegister to kickoff the call to the API
    dispatch(requestRegister(creds))

    return fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
            //console.log(response)
            if (response.ok) {
                return response;
            }
             else {
                return response.text().then(text => {throw Error(text)})
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            
                
                
               // localStorage.setItem('rcreds', JSON.stringify(creds));
                
                // Dispatch the success action
                
                dispatch(receiveRegister());
            
        })
        .catch(error => dispatch(registerError(error)))
};


export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token,
        admin: response.admin
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('creds', JSON.stringify(creds));
                localStorage.setItem('admin', response.admin);
                // Dispatch the success action
                
                dispatch(receiveLogin(response));
            }
            else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}

export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    localStorage.removeItem('admin');
    //dispatch(sCollegesFailed("Error 401: Unauthorized"));

    dispatch(receiveLogout())
}