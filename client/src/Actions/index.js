//action types
export const LOG_OUT = 'LOG_OUT';

//actions creator functions
export const logOut = (userId) => {
  return {
    type: LOG_OUT,
    payload: {
      userInfo : ''
    }
  }
}
