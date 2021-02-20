import React, { useState } from 'react';
import Data from './Data';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class SearchB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            emojiname:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    };
    onSubmit = (e) => {
        this.setState({
            emojiname:this.state.value
        })
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onClick={this.onSubmit}>
                    <label>Enter Emoji Name</label><br />
                    <input type="text" value={this.state.value} onChange={this.onChange} /><br />
                    <br /> <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
                <div>
                    {
                        <Data item={this.state.emojiname} />
                    }
                </div>
            </div>
        );
    }
}
export default SearchB;