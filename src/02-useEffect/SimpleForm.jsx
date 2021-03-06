import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'slahellsing',
        email: 'cristian_17v@hotmail.com'
    });

    const { username, email } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });

    }

    useEffect(() => {
        // console.log("useefect")

    }, []);
    useEffect(() => {
        // console.log("formstate")

    }, [formState])
    useEffect(() => {
        // console.log("email")

    }, [email])

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />


            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
               (username === 'slahellsing2') && <Message/>
            }

        </>
    )
}
