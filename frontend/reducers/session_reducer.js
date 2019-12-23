import { RECEIVE_USER, REMOVE_SESSION } from "../actions/session_actions";

const _nullUser = {
  admin: null
};

const SessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, { admin: action.user.name });
    case REMOVE_SESSION:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionsReducer;
