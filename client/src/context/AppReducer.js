export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        loading: false,
        authorized: true,
        user: action.payload
      }
    case 'GET_ACTIVITIES':
      return {
        ...state,
        loading: false,
        activities: action.payload
      }
    case 'SET_VIEWPORT':
      return {
        ...state,
        viewport: action.payload
      }
    case 'API_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
