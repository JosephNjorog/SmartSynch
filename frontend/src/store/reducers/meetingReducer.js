import { FETCH_MEETINGS } from '../actions/meetingActions';

const initialState = {
  meetings: [],
};

const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETINGS:
      return {
        ...state,
        meetings: action.payload,
      };
    default:
      return state;
  }
};

export default meetingReducer;
