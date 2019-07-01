import React from "react"
import {connect} from 'react-redux'
import {getLastResultThunk} from '../store/result'

export class Play extends React.Component {
  render () {
    const {getResult,result} = this.props
    const flatResult = result.result
    return (
      <div>
        <form>
          <label>Name</label>
          <input type="text"></input><br/>
          <label>Place</label>
          <input type="text"></input><br/>
          <label>Animal</label>
          <input type="text"></input><br/>
          <label>Thing</label>
          <input type="text"></input><br/>
          <button type='submit'>Submit</button>
        </form>
        <button onClick = {()=>getResult()}>Result</button>
        {result.result.name === ''? <div></div>:
        <div>
          <ul>
            <li>Name: {flatResult.name}</li>
            <li>Place: {flatResult.place}</li>
            <li>Animal: {flatResult.animal}</li>
            <li>Thing: {flatResult.thing}</li>
          </ul>
        </div>}
      </div>

    );
  }
}

const mapState = state => {
  return{
    result : state.result
  }
}

const mapDispatch = dispatch =>{
  return {
    getResult: function(){
      return dispatch(getLastResultThunk())
    }
  }
}

export default connect(mapState,mapDispatch)(Play)
