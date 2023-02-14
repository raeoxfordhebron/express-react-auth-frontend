import { Outlet } from "react-router-dom"

export default function Dashboard(){
    return <div>
        <h1>Your Dashboard</h1>
        <Outlet/>
    </div>
}