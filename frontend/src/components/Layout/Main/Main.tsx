import { Container } from "@mui/material"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { BORDER_RADIUS } from "@utils/constants/layoutConstants"
import Root from "@pages/Root"
import Balance from "@pages/Balance"
import ErrorPage from "@pages/ErrorPage"


function Main() {

    const errorElement = <ErrorPage />
    const router = createBrowserRouter([
        { path: "/", element: <Root />, errorElement },
        { path: 'balance', element: <Balance />, errorElement }
    ])

    return <Container sx={{
        padding: '1rem',
        boxShadow: '-1px 1px 1px 1px rgba(196, 195, 194, 0.6)',
        border: '1px solid rgba(196, 195, 194, 0.6)',
        borderRadius: BORDER_RADIUS / 4,
        height: '1080px'
    }}>
        <RouterProvider router={router} />
    </Container>
}

export default Main