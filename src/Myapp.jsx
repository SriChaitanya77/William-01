import React, { Component } from 'react';
import './Myapp.css';

class Myapp extends Component {
    render() {
        return (
            <div className='myInfo'>
                <img className='photo' src='/myphoto.jpg' alt='photo' />
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><label>P. Sri Chaitanya</label></td>
                    </tr>
                    <tr>
                        <td><label>Program</label></td>
                        <td><label>B.Tech. - CSE</label></td>
                    </tr>
                    <tr>
                        <td><label>Mobile No.</label></td>
                        <td><label>1234567890</label></td>
                    </tr>
                    <tr>
                        <td><label>Email ID</label></td>
                        <td><label>chaitanya@kluniversity.in</label></td>
                    </tr>
                    <tr>
                       <td><label>Course</label></td>
                        <td><label>Front End Development Frameworks</label></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Myapp;