import { Grid } from "@mui/material";
import Header from "./Header/Header";
import Main from "./Main/Main";

function Layout() {
    return <Grid container height='100%'>
        <Grid item xs={12}>
            <Header />
        </Grid>
        <Grid item xs={12}>
            <Main />
        </Grid>
    </Grid>
}

export default Layout