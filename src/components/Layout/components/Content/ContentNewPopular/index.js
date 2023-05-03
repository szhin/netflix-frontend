import ListMoviesRowAndTitle from '../../ListMoviesRowAndTitle';

function ContentNewPopular() {
    return (
        <div>
            <ListMoviesRowAndTitle title="Coming This Week" />
            <ListMoviesRowAndTitle title="Worth the Wait" />
            <ListMoviesRowAndTitle title="New on Neftlix" />
            <ListMoviesRowAndTitle title="Coming Next Week" />
        </div>
    );
}

export default ContentNewPopular;
