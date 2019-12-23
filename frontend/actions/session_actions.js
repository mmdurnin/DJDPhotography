import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_SESSION = "REMOVE_SESSION";
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const removeSession = userId => ({
  type: REMOVE_SESSION,
  userId
});

// const receiveErrors = errors => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors
// });

// export const clearErrors = () => ({
//   type: CLEAR_ERRORS
// });


export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(
    user => dispatch(receiveUser(user)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(
    () => dispatch(removeSession()),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};