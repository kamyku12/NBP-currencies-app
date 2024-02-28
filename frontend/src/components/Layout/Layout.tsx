import { Grid } from "@mui/material";
import Header from "./Header/Header";

function Layout() {
    return <Grid container>
        <Grid item xs={12}>
            <Header />
        </Grid>
        <Grid item xs={12}>
            Main
        </Grid>
    </Grid>
}

export default Layout