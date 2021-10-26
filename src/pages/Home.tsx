import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import HomeHeader from "../components/common/HomeHeader";

const Home : FunctionComponent = () => {
    return (
        <Box>
            <HomeHeader />
            Hello world!
        </Box>
    )
}

export default Home;