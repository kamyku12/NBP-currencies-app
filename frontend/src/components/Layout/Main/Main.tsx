import { Container } from "@mui/material"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { BORDER_RADIUS } from "../../../utils/constants/layoutConstants"


function Main() {
    const router = createBrowserRouter([
        { path: "/", element: <p>Hello World</p> },
        { path: 'balance', element: <p>Balance</p> }
    ])

    return <Container sx={{
        boxShadow: '-1px 1px 1px 1px rgba(196, 195, 194, 0.6)',
        border: '1px solid rgba(196, 195, 194, 0.6)',
        borderRadius: BORDER_RADIUS / 4,
        height: '1080px'
    }}>
        <RouterProvider router={router} />
    </Container>
}

export default Main