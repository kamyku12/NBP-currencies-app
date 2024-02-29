import { AddCircle } from "@mui/icons-material";
import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { useState } from "react";
import classes from './header.module.css'

function Header() {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null)
    const menuOpened = Boolean(anchorElement)

    return <AppBar position="sticky">
        <Toolbar>
            <Grid container>
                <Grid item xs display='flex' alignItems='center'>
                    <span className={`${classes.text}`}>BILLANCE</span>
                </Grid>
                <Grid item xs>

                </Grid>
                <Grid item xs display='flex' justifyContent='flex-end'>
                    <IconButton color='inherit' onClick={(event) => setAnchorElement(event.currentTarget)}>
                        <AddCircle />
                    </IconButton>
                    <Menu anchorEl={anchorElement} open={menuOpened} onClose={() => setAnchorElement(null)}>
                        <MenuItem>Add currency</MenuItem>
                        <MenuItem>Add transaction</MenuItem>
                    </Menu>
                    <Button color="inherit">Login</Button>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
}

export default Header