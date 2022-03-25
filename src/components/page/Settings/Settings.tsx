import { useAppSelector } from "../../../store/hooks/redux"

const Settings = () => {
    const user = useAppSelector(state => state.users.authUser[0])

    return (
        <p>{user.name}</p>
    )
}

export default Settings