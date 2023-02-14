import { Form } from "react-router-dom";

export default function Signup(){
    return <Form action="/signup" method="post">
        <input type="text" name="username" placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <button>Create User</button>
    </Form>
}