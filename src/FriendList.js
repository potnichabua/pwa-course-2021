/* เรียก link มาเตรียมใช้งาน */
import { Link } from 'react-router-dom';
import ChatIcon from '@material-ui/icons/Chat';
import App from './App';

/* สร้าง component FriendList */
function FriendList() {
    return (
        <App>
            <div>
                Friend List
                <Link to="/">
                    <button>
                        <ChatIcon />
                    </button>
                </Link>
            </div>
        </App>
    )
};

export default FriendList;
