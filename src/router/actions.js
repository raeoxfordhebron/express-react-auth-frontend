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
    return redirect("/login")
}

 export const loginAction = async ({request}) => {
    const formData = await request.formData()
    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }
    const response = await fetch(url + "/auth/login", {
    method: "post",
    headers,
    credentials: "include",
    body: JSON.stringify(user)
})
if (response.status === 400){
    alert("failed login")
    return redirect("/dashboard")
} 
return redirect("/dashboard")
 }

 export const logoutAction = async () => {
    const response = await fetch(url + "/auth/logout", {
        method: "post"
    })
if (response.status === 400){
    alert("failed logout")
    return redirect("/dashboard")
} 
return redirect("/login")
}

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const note = {
        title: formData.get("title"),
        message: formData.get("message")
    }
    const response = await fetch(url + "/note", {
    method: "post",
    headers,
    credentials: "include",
    body: JSON.stringify(note)
})
if (response.status === 400){
    alert("failed create")
    return redirect("/dashboard")
} 
return redirect("/dashboard")
}