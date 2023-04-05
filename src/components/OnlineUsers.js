import {useCollection} from "../hooks/useCollection";

// styles && components
import "./OnlineUsers.css"
import Avatar from "./Avatar";

export default function OnlineUsers() {
    const { documents, error } = useCollection('users')
    return (
        <div className="user-list">
            <h2>All Users</h2>
            {error && <div className="error">{error}</div>}
            {/* documents && is used so that it only shows when there are documents */}
            {documents && documents.map(user => (
                <div className="user-list-item" key={user.id}>
                    {user.online && <span className="online-user"></span>}
                    <span>{user.displayName}</span>
                    <Avatar src={user.photoURL}/>
                </div>
            )) }
        </div>
    );
};

