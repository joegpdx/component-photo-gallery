import React, { Component } from "react";
import ImageList from "./ImageList.js";
import Header from "./Header.js";
import './App.css';

export default class App extends Component {
    state = {
      selected: null,
      horns: null
    }
  render() {
      const handleChange = e => {
        console.log(e.target)
      this.setState({ selected: e.target.value });
      }
      const handleHornChange = e => {
        console.log(e.target)
      this.setState({ horns: e.target.value });
      }

    return (
      <div>
       <Header />
       <main>
         <section className="options">
           <select className="image-keyword-filter" onChange={handleChange}>
             <option value="" defaultValue>
              All Types
             </option>
              <option value="narwhal">narwhal</option>
              <option value="rhino">rhino</option>
              <option value="unicorn">unicorn</option>
              <option value="unilego">unilego</option>
              <option value="triceratops">triceratops</option>
              <option value="markhor">markhor</option>
              <option value="mouflon">mouflon</option>
              <option value="chameleon">chameleon</option>
              <option value="lizard">lizard</option>
              <option value="dragon">dragon</option>
           </select>
           <select className="image-horns-filter" onChange={handleHornChange}>
             <option value="test" defaultValue>
              All Types
             </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
           </select>
         </section>
        < section className="list-section">
          <ImageList selected={this.state.selected} horns={this.state.horns}/>
        </section>
       </main>
      </div>
     );
   }
 }