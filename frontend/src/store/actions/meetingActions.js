// Action types
export const FETCH_MEETINGS = 'FETCH_MEETINGS';

// Action creators
export const fetchMeetings = () => {
  return async (dispatch) => {
    try {
      const response = await fetchMeetings(); // Assume fetchMeetings is an API call
      dispatch({
        type: FETCH_MEETINGS,
        payload: response,
      });
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };
};
