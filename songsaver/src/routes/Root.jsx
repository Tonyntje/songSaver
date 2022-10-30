
import { Outlet } from "react-router-dom"
import NavMenu from "./NavMenu"

function Root() {
    return (
        <>
            <NavMenu />
            <Outlet />
        </>
    )

}

export default Root