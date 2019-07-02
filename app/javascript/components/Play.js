import React from "react"
import {connect} from 'react-redux'
import {getLastResultThunk} from '../store/result'

const initialState = {
  name:'',
  place:'',
  animal:'',
  thing:''
}

export class Play extends React.Component {
  constructor(){
    super();
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState(initialState)
  }

  render () {
    const {getResult,result} = this.props
    console.log(result)
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>

          {/* NAME */}
          <label>Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange}></input><br/>

          {/* PLACE */}
          <label>Place</label>
          <input type="text" name='place' value={this.state.place} onChange={this.handleChange}></input><br/>

          {/* ANIMAL */}
          <label>Animal</label>
          <input type="text" name='animal' value={this.state.animal} onChange={this.handleChange}></input><br/>

          {/* THING */}
          <label>Thing</label>
          <input type="text" name='thing' value={this.state.thing} onChange={this.handleChange}></input><br/>

          <button type='submit'>Submit</button>
        </form>
        <h5>Click the Result button below to get the result</h5>
        <button onClick = {()=>getResult()}>Result</button>
        <div>
        {result && result.length !== 0 ?
        <div>
          {result.map(result=>{
            return (
            <ul>
              <li>Name: {result.name}</li>
              <li>Place: {result.place}</li>
              <li>Animal: {result.animal}</li>
              <li>Thing: {result.thing}</li>
          </ul>)})}
        </div>:<div></div> }
        </div>
      </div>

    );
  }
}

//map state to props
const mapState = state => {
  return{
    result : state.result
  }
}
//map dispatch to props
const mapDispatch = dispatch =>{
  return {
    getResult: function(){
      return dispatch(getLastResultThunk())
    }
  }
}

//connected component
export default connect(mapState,mapDispatch)(Play)
