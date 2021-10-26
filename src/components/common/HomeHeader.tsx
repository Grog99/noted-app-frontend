import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";

const HomeHeader : FunctionComponent = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>Hello HEADER</Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HomeHeader;