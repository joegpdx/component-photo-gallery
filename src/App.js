import React, { Component } from "react";
import ImageList from "./ImageList.js";
import Header from "./Header.js";
import Select from "./Select.js";
import './App.css';
// import request from 'superagent';

export default class App extends Component {
  state = {
    selected: null,
    horns: null,
    // data: null
  }

  // async componentDidMount() {
  //   const data = await request.get('http://www.nokeynoshade.party/api/queens')
  //   this.setState({ data: data.body })
  // }

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
          {/* {JSON.stringify(this.state.data)} */}
          <Select handleChangeCallBack={handleChange} handleChangeCallBackHorns={handleHornChange} />
          <ImageList selected={this.state.selected} horns={this.state.horns} />
        </main>
      </div>
    );
  }
}