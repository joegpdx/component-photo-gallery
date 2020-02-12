import React, { Component } from "react";
import ImageList from "./ImageList.js";
import Header from "./Header.js";
import './App.css';

export default class App extends Component {
    state = {
      selected: null
    }
  render() {
      const handleChange = e => {
        console.log(e.target)
      this.setState({ selected: e.target.value });
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
              <option value="narwhal">Uniwhal</option>
              <option value="rhino">Rhino Family</option>
              <option value="unicorn">Unicorn Head</option>
              <option value="unilego">Unilego</option>
              <option value="narwhal">Basically a unicorn</option>
              <option value="narwhal">#truth</option>
              <option value="rhino">Baby Rhino</option>
              <option value="triceratops">Cera</option>
              <option value="narwhal">Narwhal costume</option>
              <option value="rhino">Rhino costume</option>
              <option value="unicorn">Believe</option>
              <option value="markhor">Markhor</option>
              <option value="markhor">Baby Markhor</option>
              <option value="addax">Mouflon</option>
              <option value="keyword">Addax</option>
              <option value="chameleon">Happy Jackson's Chameleon</option>
              <option value="chameleon">Serious Jackson's Chameleon</option>
              <option value="lizard">Horned Lizard</option>
              <option value="keyword">XyZ</option>
           </select>
         </section>
        < section className="list-section">
          <ImageList selected={this.state.selected} />
        </section>
       </main>
      </div>
     );
   }
 }