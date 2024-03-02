import { Button, Stack, Typography } from "@mui/material"

function ErrorPage() {
    return <Stack alignItems="center" justifyContent="center">
        <Typography variant='h2' textAlign='center'>
            Oops...
        </Typography>
        <Typography textAlign='center'>
            You have reached a page you shouldn't
            <br />
            To go back press button bellow
        </Typography>
        <Button href='/' sx={{ width: 'fit-content' }}>
            Go back
        </Button>
    </Stack>
}

export default ErrorPage