import axios from 'axios';

//Types

const GET_RESULT = 'GET_RESULT'

//Actions

const getResult = (data)=>({type:GET_RESULT,data})

//Thunks

export const getLastResultThunk = ()=>async dispatch =>{
  try {
    const {data} = await axios.get('v1/result')
    dispatch(getResult(data))
  } catch (error) {
    console.error(error)
  }
}

//Initial state
const initial = []

//Reducer

export default function(state=initial,action){
  switch (action.type){
    case GET_RESULT:
      return action.data.result
    default:
      return state
  }
}
