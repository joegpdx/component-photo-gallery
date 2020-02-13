import React, { Component } from "react";

export default class Select extends Component {
    render() {
        return (
            <div>
                <main>
                    <section>
                        <select className="image-keyword-filter" onChange={this.props.handleChangeCallBackSelect}>
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
                        <select className="image-horns-filter" onChange={this.props.handleChangeCallBackHorns}>
                            <option value="test" defaultValue>
                                All Types
             </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </select>
                    </section>
                </main>
            </div>
        );
    }
}