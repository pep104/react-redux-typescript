import React, { useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypesSelector } from "../hooks/useTypeSelector";
import { fetchUser } from "../store/action-creators/user";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelector(state => state.user)

    const {fetchUser} = useAction()

    useEffect(() => {
        fetchUser()
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return (
        <div>
            {users.map(user => 
                <div key={user.id}>{user.name}</div>)}
        </div>
    )
}

export default UserList