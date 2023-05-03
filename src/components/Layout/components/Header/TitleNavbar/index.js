import routes from '../../../../../config/routes';

const TitleNavbar = [
    { path: routes.home, title: 'Home' },
    {
        path: routes.tvshows,
        title: 'TV Shows',
    },
    {
        path: routes.movies,
        title: 'Movies',
    },

    { path: routes.yourAccount, title: null },
    {
        path: routes.latest,
        title: 'New & Popular',
    },
    {
        path: routes.myList,
        title: 'My List',
    },
    {
        path: routes.browserByLanguge,
        title: 'Browse by Languages',
    },
];

export { TitleNavbar };
