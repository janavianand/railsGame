import React from "react"

export default class Play extends React.Component {
  render () {
    return (
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
    );
  }
}

