const initialState = {
  user: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case 'CURRENT_USER': {
      return Object.assign({}, state, {user: action.user});
    }
  }

  return state;
};
