import Home from '../Home';
import TVShows from '../TVShows';
import Movies from '../Movies';
import NewPopular from '../New&Popular';
import MyList from '../MyList';
import BrowseByLanguages from '../BrowseByLanguages';
import Account from '../Account';
import routes from '../../config/routes';
import { createRef } from 'react';

import { OnlyList } from '../../components/Layout';
import { ListAndTitle } from '../../components/Layout';
import { HeroAndTitle } from '../../components/Layout';
import { AccountLayout } from '../../components/Layout';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
        title: 'Home',
        nodeRef: createRef(),
        id: 0,
    },
    {
        path: routes.tvshows,
        component: TVShows,
        layout: HeroAndTitle,
        title: 'TV Shows',
        nodeRef: createRef(),
        id: 1,
    },
    {
        path: routes.movies,
        component: Movies,
        layout: HeroAndTitle,
        title: 'Movies',
        nodeRef: createRef(),
        id: 2,
    },

    {
        path: routes.yourAccount,
        component: Account,
        layout: AccountLayout,
        title: 'Account',
        nodeRef: createRef(),
        id: 3,
    },
    {
        path: routes.latest,
        component: NewPopular,
        layout: OnlyList,
        title: 'New & Popular',
        nodeRef: createRef(),
        id: 4,
    },
    {
        path: routes.myList,
        component: MyList,
        layout: ListAndTitle,
        title: 'My List',
        nodeRef: createRef(),
        id: 5,
    },
    {
        path: routes.browserByLanguge,
        component: BrowseByLanguages,
        layout: ListAndTitle,
        title: 'Browse by Languages',
        nodeRef: createRef(),
        id: 6,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
