/* เรียก link มาเตรียมใช้งาน */
import { Link } from 'react-router-dom';

import ChatIcon from '@material-ui/icons/Chat';

/* สร้าง component FriendList */
function FriendList() {
    return (
        <div>
            Friend List
            <Link to="/">
                <button>
                    <ChatIcon />
                </button>
            </Link>
        </div>

    )
};

export default FriendList;
