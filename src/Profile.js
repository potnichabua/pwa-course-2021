import App from './App';
import FaceIcon from '@material-ui/icons/Face';

function Profile() {

    return (
        <App>
            <div className="profile-page col-12">
                <div className="text-header">My Profile</div>
                <div className="profile-info">
                    <div className="icon"><FaceIcon fontSize="large" /></div>
                    <div className="name">Onion</div>
                    <div className="detail">Hi! You can call me Prikhom.</div>
                </div>
            </div>
        </App>
    )
}

export default Profile;