import { AppBar, Button, Grid, Toolbar } from "@mui/material";

function Header() {

    return <AppBar position="sticky">
        <Toolbar>
            <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item xs>

                </Grid>
                <Grid item xs>
                    <Button color="inherit">Login</Button>

                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
}

export default Header