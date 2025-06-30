import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import DashboardLayout from "./components/pages/DashboardLayout";
import Dashboard from "./components/pages/Dashboard";
import Settings from "./components/pages/Settings";
import Profile from "./components/pages/Profile";
import Friends from "./components/pages/Friends";
import RouteError from "./components/error/RouteError";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./components/store/store";

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            errorElement={<RouteError />}
                            element={<Home />}
                        />
                        <Route
                            path="/login"
                            errorElement={<RouteError />}
                            element={<Login />}
                        />
                        <Route
                            path="/dashboard"
                            errorElement={<RouteError />}
                            element={<DashboardLayout />}
                        >
                            <Route
                                index
                                errorElement={<RouteError />}
                                element={<Dashboard />}
                            />
                            <Route
                                path="settings"
                                errorElement={<RouteError />}
                                element={<Settings />}
                            />
                            <Route
                                path="profile"
                                errorElement={<RouteError />}
                                element={<Profile />}
                            />
                            <Route
                                path="friends"
                                errorElement={<RouteError />}
                                element={<Friends />}
                            />
                        </Route>
                        <Route
                            path="*"
                            errorElement={<RouteError />}
                            element={<RouteError />}
                        />
                    </Routes>
                </Router>
            </ErrorBoundary>
        </Provider>
    );
};

export default App;
