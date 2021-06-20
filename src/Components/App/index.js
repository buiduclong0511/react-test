import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { 
    Grid,
    Row,
    Column
} from "@mycv/mycv-grid"
  
import config from "../../Containers/config"
import Home from "../../Containers/Home"
import Header from "../../Containers/Header"
import Following from "../../Containers/Following"
import SideBar from "../../Containers/SideBar"

export default function App() {
    return (
        <Grid maxWidth={1100}>
            <Header />
            <Row>
                <Column size={0} sizeTablet={3} sizeDesktop={3}>
                    <SideBar />
                </Column>
                <Column size={12} sizeTablet={9} sizeDesktop={9}>
                    <Router>
                        <Switch>
                            <Route path={config.route.home} component={Home} exact />
                            <Route path={config.route.following} component={Following} exact />
                        </Switch>
                    </Router>
                </Column>
            </Row>
        </Grid>
    )
}