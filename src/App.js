import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import ManageLayout from './layouts/ManageLayout/ManageLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.page;
                        const Layout = route.isManageRoute ? ManageLayout : DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout isShowHeader={route.isShowHeader} isShowFooter={route.isShowFooter}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
