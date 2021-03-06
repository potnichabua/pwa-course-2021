/* เรียก link มาเตรียมใช้งาน */
import { Link } from 'react-router-dom';
import ChatIcon from '@material-ui/icons/Chat';
import App from './App';

/* สร้าง component FriendList */
function FriendList() {
    return (
        <App>
            <div className="friendlist-page col-12">
                <div className="text-header">Friend List</div>
                <div className="list-item">
                    <div className="name">Onion</div>
                    <Link to="/" className="chat">
                        <button><ChatIcon /></button>
                    </Link>
                </div>
            </div>
        </App>
    )
};

export default FriendList;
