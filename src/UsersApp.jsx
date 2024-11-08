import { useState } from "react"
import { UsersList } from "./components/UsersList"

export const UsersApp = () => {
    const [url, setUrl] = useState('users')
    const handleFetch = () => {
        url === 'users' ? setUrl('comments') : setUrl('users')
    }

    return (
        <>
            <h1>Listado de Datos</h1>
            <button onClick={handleFetch}>
                {url === 'users' ? 'Mostrar Comentarios' : 'Mostrar Usuarios'}
            </button>
            <UsersList url={url}/>
        </>
    )
}