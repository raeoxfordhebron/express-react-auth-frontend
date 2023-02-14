import url from "./url";
import headers from "./header";
import {redirect} from "react-router-dom"

export const signupAction = async ({request}) => {
    const formData = await request.formData()
    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }
    const response = await fetch(url + "/auth/signup", {
    method: "post",
    headers,
    body: JSON.stringify(user)
})

    if (response.status === 400){
        alert("failed signup")
        return redirect("/signup")
    } 
redirect("/login")
}

 