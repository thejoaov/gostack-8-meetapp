export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function newMeetupRequest(data) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { data },
  };
}

export function meetupSuccess(meetup) {
  return {
    type: '@meetup/MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function meetupFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}
