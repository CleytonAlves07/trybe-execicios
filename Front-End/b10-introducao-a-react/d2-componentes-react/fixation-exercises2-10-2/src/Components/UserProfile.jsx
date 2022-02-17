import { Component } from 'react'
import Image from './Image';

class UserProfile extends Component {
    render() {
        return (
            <div className='textuser'>
                <p> {this.props.user.name}</p>
                <p> {this.props.user.email}</p>
                <Image  source={this.props.user.avatar} alt="User avatar" />
            </div>
        );
    }
}

export default UserProfile;