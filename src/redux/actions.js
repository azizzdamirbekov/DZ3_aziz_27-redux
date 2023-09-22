import { types } from "./types"

export function changeTitleAction () {
  return{
    type: types.CHANGE_TITLE
  }
}

export function getUsersAction(users) {
  return{
    type:types.USERS,
    payload: users
  }
}

export function getMoreAction(users) {
  return{
    type:types.GET_MORE,
    payload: users
  }
}

export function fetchUsersAction () {
  return async function (dispatch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    dispatch(getUsersAction(data))
  }
}

export function fetchUserOneInfo(id) {
  return async function (dispatch){
    const response = await fetch (`https://jsonplaceholder.typicode.com/users${id}`)
    const data = await response.json()
    dispatch(getMoreAction(data))
  }
}

export function fetchUserGetAction () {
  return async function (dispatch) {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    dispatch(getMoreAction(data))
}
}