import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {editMode && props.authorizedUserId === props.profileUId ?
                <div>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status}/>
                </div>
                :
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "------"}</span>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;