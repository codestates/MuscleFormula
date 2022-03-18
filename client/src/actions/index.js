//action types
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const NOTIFY = 'NOTIFY';
export const DE_NOTIFY = 'DE_NOTIFY'

//actions creator functions
export const logOut = (userId) => {
  return {
    type: LOG_OUT,
    payload: {
      userInfo : ''
    }
  }
}

export const logIn = (userId) => {
  return {
    type: LOG_IN,
    payload: {
      userInfo : ''
    }
  }
}
export const notify = (message) => {
  return {
    type: NOTIFY,
    payload: {
      alarmCount : 1
    }
  }
}

export const deNotify = (message) => {
  return {
    type: DE_NOTIFY,
    payload: {
      alarmCount : ''
    }
  }
}