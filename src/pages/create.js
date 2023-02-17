import { Form } from "react-router-dom";

export default function Create(){
    return <Form action="/dashboard/create" method="post">
        <input type="text" name="title" placeholder="title"/>
        <input type="text" name="message" placeholder="message"/>
        <button>Create Note</button>
    </Form>
}