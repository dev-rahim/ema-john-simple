import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import InitializeAuthentication from "../Firebase/firebase.init"

const useFirebase = () => {
    InitializeAuthentication()
    const [user, setUser] = useState({})

    const auth = getAuth()

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase;