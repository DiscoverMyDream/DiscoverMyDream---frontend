import * as ActionTypes from './actionTypes';
import axios from 'axios';
const basePUrl= 'http://localhost:8000'
const baseUrl = 'http://localhost:5000'

export const gradeConvertSuccess = (grade) => ({
    type: ActionTypes.GRADECONVERT_SUCCESS,
    payload: grade
});

export const gradeConvertFailed = (errmess) => ({
    type: ActionTypes.GRADECONVERT_FAILED,
    payload: errmess
});

export const gradeConvertLoading = () => ({
    type: ActionTypes.GRADECONVERT_LOADING
});

export const convertGrade =  (Cgpa) => (dispatch) => {
    dispatch(gradeConvertLoading(true))
    const cgpa = Cgpa

    return  fetch(basePUrl + `/gradeConvert?cgpa=${cgpa}`, {
        method: 'GET',

    } )
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(grade => {dispatch(gradeConvertSuccess(grade))})
        .catch(error => {
            //console.log('Predict Error ', error)
            dispatch(gradeConvertFailed(error))
        })

}

export const mpredictSuccess = (prediction) => ({
    type: ActionTypes.MRANKPREDICT_SUCCESS,
    payload: prediction
});

export const mpredictFailed = (errmess) => ({
    type: ActionTypes.MRANKPREDICT_FAILED,
    payload: errmess
});

export const mpredictLoading = () => ({
    type: ActionTypes.MRANKPREDICT_LOADING
});

export const getMainsPrediction =  (info) => (dispatch) => {
    dispatch(mpredictLoading(true))
    const [marks, totalMarks,category] = [info.marks, info.totalMarks,info.category]

    return  fetch(basePUrl + `/mainspredict?marks=${marks}&totalMarks=${totalMarks}&category=${category}`, {
        method: 'GET',

    } )
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(prediction => {dispatch(mpredictSuccess(prediction))})
        .catch(error => {
            //console.log('Predict Error ', error)
            dispatch(mpredictFailed(error))
        })

}

export const apredictSuccess = (prediction) => ({
    type: ActionTypes.ARANKPREDICT_SUCCESS,
    payload: prediction
});

export const apredictFailed = (errmess) => ({
    type: ActionTypes.ARANKPREDICT_FAILED,
    payload: errmess
});

export const apredictLoading = () => ({
    type: ActionTypes.ARANKPREDICT_LOADING
});

export const getAdvancedPrediction =  (info) => (dispatch) => {
    dispatch(apredictLoading(true))
    const [marks, totalMarks,category] = [info.marks, info.totalMarks,info.category]

    return  fetch(basePUrl + `/advancedpredict?marks=${marks}&totalMarks=${totalMarks}&category=${category}`, {
        method: 'GET',

    } )
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(prediction => {dispatch(apredictSuccess(prediction))})
        .catch(error => {
            //console.log('Predict Error ', error)
            dispatch(apredictFailed(error))
        })

}

export const cpredictSuccess = (prediction) => ({
    type: ActionTypes.SCOLLEGEPREDICT_SUCCESS,
    payload: prediction
});

export const cpredictFailed = (errmess) => ({
    type: ActionTypes.SCOLLEGEPREDICT_FAILED,
    payload: errmess
});

export const cpredictLoading = () => ({
    type: ActionTypes.SCOLLEGEPREDICT_LOADING
});

export const getSatCollegePrediction =  (info) => (dispatch) => {
    dispatch(cpredictLoading(true))
    const [clg, marks,gpa] = [info.clg, info.marks,info.gpa]

    return  fetch(basePUrl + `/satpredict?clg=${clg}&marks=${marks}&gpa=${gpa}`, {
        method: 'GET',

    } )
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(prediction => {dispatch(cpredictSuccess(prediction))})
        .catch(error => {
            //console.log('Predict Error ', error)
            dispatch(cpredictFailed(error))
        })

}

export const sCollegeLoading = () => ({
    type: ActionTypes.SCOLLEGE_LOADING
});

export const sCollegeFailed = (errmess) => ({
    type: ActionTypes.SCOLLEGE_FAILED,
    payload: errmess
});

export const sCollegeSuccess = (clgList) => {
   
    return {
    type: ActionTypes.SCOLLEGE_SUCCESS,
    payload: clgList
}};

export const addSCollege = (college) => ({
    type: ActionTypes.ADD_SCOLLEGE,
    payload: college
});

export const postSCollege = (clg) => (dispatch) => {

    const newClg = {
        name: clg.name,
        description: clg.discription,
        image: clg.image,
        datasetPath: clg.dataset,
        collegeLink: clg.collegeLink
    }
    console.log('College: ', newClg);
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'colleges', {
        method: 'POST',
        body: JSON.stringify(newClg),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert("College added Successfully!!"); dispatch(addSCollege(response)); dispatch(fetchSCollege()); })
        .catch(error => {
            console.log('Post College ', error.message);
            alert('COllege could not be added\nError: ' + error.message);
        })
}

export const deleteSCollege = (clgId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'colleges/' + clgId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
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
        .then(clg => { console.log('College Deleted', clg); dispatch(fetchSCollege()); })
        .catch(error => dispatch(sCollegeFailed(error.message)));
};

export const updateSCollege = (clg) => (dispatch) => {

    const newClg = {
        name: clg.name,
        description: clg.discription,
        image: clg.image,
        datasetPath: clg.dataset,
        collegeLink: clg.collegeLink
    }
    console.log('College: ', newClg);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'colleges/' + clg.id, {
        method: 'PUT',
        body: JSON.stringify(newClg),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert("COllege Updated!"); dispatch(fetchSCollege()); })
        .catch(error => {
            console.log('Update College ', error.message);
            alert('College could not be updated\nError: ' + error.message);
        })
}

export const fetchSCollege = () => (dispatch) => {
    console.log("yo")
    dispatch(sCollegeLoading(true));

   

    return fetch(baseUrl + '/api/colleges', {
        headers: {
            'method': 'GET',
        
        },
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(clgs => dispatch(sCollegeSuccess(clgs)))
        .catch(error => dispatch(sCollegeFailed(error.message)));
}

export const listColleges = (keyword = '', pageNumber = '') => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.COLLEGE_LIST_REQUEST })
  
      const { data } = await axios.get(baseUrl+`/api/colleges?keyword=${keyword}&pageNumber=${pageNumber}`);
  
      dispatch({
        type: ActionTypes.COLLEGE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.COLLEGE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

  export const deleteCollege = (id) => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.COLLEGE_DELETE_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
      const config = {
        headers: {
          Authorization: bearer,
        },
      };
  
      await axios.delete(baseUrl+`/api/colleges/${id}`, config);
  
      dispatch({
        type: ActionTypes.COLLEGE_DELETE_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.COLLEGE_DELETE_FAIL,
        payload: message,
      });
    }
  }; 

  export const createCollege = (college) => async (dispatch) => {
    console.log(college)
    try {
      dispatch({
        type: ActionTypes.COLLEGE_CREATE_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
  
      const config = {
        headers: {
          Authorization: bearer,
        },
      };
  
      const { data } = await axios.post(baseUrl+`/api/colleges`, college, config);
  
      dispatch({
        type: ActionTypes.COLLEGE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.COLLEGE_CREATE_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateCollege = (college) => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.COLLEGE_UPDATE_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
      };
  
      const { data } = await axios.put(
       baseUrl+ `/api/colleges/${college._id}`,
        college,
        config
      );
  
      dispatch({
        type: ActionTypes.COLLEGE_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: ActionTypes.COLLEGE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.COLLEGE_UPDATE_FAIL,
        payload: message,
      });
    }
  }

export const listCollegeDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.COLLEGE_DETAILS_REQUEST });
  
      const { data } = await axios.get(baseUrl+`/api/colleges/${id}`);
  
      dispatch({
        type: ActionTypes.COLLEGE_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.COLLEGE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  

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

    return fetch(baseUrl + '/api/users', {
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
                return response.json().then(text => {throw Error(text)})
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
        .catch(error => dispatch(registerError(error.message)))
};


export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
  console.log(response);
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token,
        isAdmin: response.isAdmin
    }
}

export const loginError = (message) => {
    console.log(message);
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + '/api/users/login', {
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
                return response.text().then(text => {throw Error(text)})
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.token) {
               
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('creds', JSON.stringify(creds));
                localStorage.setItem('isAdmin', response.isAdmin);
                // Dispatch the success action
                
                dispatch(receiveLogin(response));
            }
            else {
                var error = new Error('Error ');
                error.response = response;
                console.log(error);
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
    localStorage.removeItem('isAdmin');
    //dispatch(sCollegesFailed("Error 401: Unauthorized"));

    dispatch(receiveLogout())
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ActionTypes.USER_DETAILS_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
      const config = {
        headers: {
          Authorization: bearer,
        },
      };
  
      const { data } = await axios.get(baseUrl+`/api/users/${id}`, config);
  
      dispatch({
        type: ActionTypes.USER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.USER_DETAILS_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateUserProfile = (user) => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.USER_UPDATE_PROFILE_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
      };
  
      const { data } = await axios.put(baseUrl+`/api/users/profile`, user, config);
  
      dispatch({
        type: ActionTypes.USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
      dispatch(receiveLogin());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.USER_UPDATE_PROFILE_FAIL,
        payload: message,
      });
    }
  };
  
  export const listUsers = () => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.USER_LIST_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
      const config = {
        headers: {
          Authorization: bearer,
        },
      };
  
      const { data } = await axios.get(baseUrl+`/api/users`, config);
  
      dispatch({
        type: ActionTypes.USER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.USER_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  export const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.USER_DELETE_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
      const config = {
        headers: {
          Authorization: bearer,
        },
      };
  
      await axios.delete(baseUrl+`/api/users/${id}`, config);
  
      dispatch({ type: ActionTypes.USER_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.USER_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateUser = (user) => async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.USER_UPDATE_REQUEST,
      });
  
      const bearer = 'Bearer ' + localStorage.getItem('token');
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
      };
  
      const { data } = await axios.put(baseUrl+`/api/users/${user._id}`, user, config);
  
      dispatch({ type: ActionTypes.USER_UPDATE_SUCCESS });
  
      dispatch({ type: ActionTypes.USER_DETAILS_SUCCESS, payload: data });
      
      dispatch({ type: ActionTypes.USER_DETAILS_RESET });    
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logoutUser())
      }
      dispatch({
        type: ActionTypes.USER_UPDATE_FAIL,
        payload: message,
      });
    }
  };