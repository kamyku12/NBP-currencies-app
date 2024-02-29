import { Grid } from "@mui/material";
import Header from "./Header/Header";
import Router from "../Router/Router";

function Layout() {
    return <Grid container>
        <Grid item xs={12}>
            <Header />
        </Grid>
        <Grid item xs={12}>
            <Router />
        </Grid>
    </Grid>
}

export default Layout