import { ReactElement, createContext, useMemo, useState } from "react";

interface UserContext {
    logged: boolean,
    user: object
}

const INITIAL_CONTEXT = {
    logged: false,
    user: {}
}

export const UserContext = createContext<UserContext>(INITIAL_CONTEXT)

function UserContextProvider({ children }: { children: ReactElement }) {
    const [userData, setUserData] = useState({})
    const [userLogged, setUserLogged] = useState(false)

    const value = useMemo(() => ({
        logged: userLogged,
        user: userData,
        setUser: setUserData,
        setUserLogged: setUserLogged
    }), [userData, userLogged])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider