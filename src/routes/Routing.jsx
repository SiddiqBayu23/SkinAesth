import { Suspense } from "react";
import { routingList } from "./routing-list";
import { Routes, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routingList.map((route) => (
                        <Route path={route.path} element={route.element} key={route.path}></Route>
                ))}
            </Routes>
        </Suspense>
    );
};

export default Routing;