import React from 'react';
import { publicRoutes } from '../../pages/routes';
import { Route, Routes, useLocation } from 'react-router-dom';

import { OnlyList } from '../Layout';
import { HeroAndTitle } from '../Layout';
import { ListAndTitle } from '../Layout';
import { DefaultLayout } from '../Layout';
import { AccountLayout } from '../Layout';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {publicRoutes.map((route, index) => {
                    // const { nodeRef } =
                    //     publicRoutes.find(
                    //         (route) => route.path === location.pathname,
                    //     ) ?? {};
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout === ListAndTitle) {
                        Layout = route.layout;
                    } else if (route.layout === HeroAndTitle) {
                        Layout = route.layout;
                    } else if (route.layout === OnlyList) {
                        Layout = route.layout;
                    } else if (route.layout === AccountLayout) {
                        Layout = route.layout;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout title={route.title} key={route.id}>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
