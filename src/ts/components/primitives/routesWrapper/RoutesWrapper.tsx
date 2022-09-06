import ErrorPage from "@components/pages/errorPage/ErrorPage";
import NavBar from "@components/pages/navBar/NavBar";
import {
    Routes,
    Route,
} from 'react-router-dom';

type Props = {
    children: React.ReactNode | React.ReactNode[];
};

/**
 * A wrapper for the routes
 * @param {React.ReactNode | React.ReactNode[]} children The children
 * @returns {JSX.Element} The routes wrapper
 */

const RoutesWrapper = ({ children }: Props) => (
    <>
        <NavBar />
        <Routes>
            {children}
            <Route path="*" element={<ErrorPage error={404} />} />
        </Routes>
    </>
);

export default RoutesWrapper;