import { QueryClient, QueryClientProvider } from "react-query";
import RoutesWrapper from "@components/primitives/routesWrapper/RoutesWrapper";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route } from "react-router-dom";
import { appPath } from "@routes/app";
import GameInfo from "@components/pages/gameInfo/GameInfo";
import GameContainer from "@components/pages/gameContainer/GameContainer";

// Create a client for react-query
const queryClient = new QueryClient();

/**
 * The main application where all the routes are defined
 * @returns {JSX.Element} The application
 */

const App = () => (
    <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <BrowserRouter>
                <RoutesWrapper>
                    <Route path={appPath.home} element={<GameContainer />} />
                    <Route path={appPath.gameInfo} element={<GameInfo />} />
                </RoutesWrapper>
            </BrowserRouter>
        </HelmetProvider>
    </QueryClientProvider>

);

export default App;