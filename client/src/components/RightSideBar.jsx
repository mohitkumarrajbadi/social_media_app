import TrendingCard from "./small components/TrendingCard";
import trending from "../trending";

function createTrendingCard(trending) {
    return (
        <TrendingCard
            key={trending.id}
            name={trending.trending_name}
            tweets={trending.no_of_tweets}
        />
    );
}

const RightSideBar = () => {
    return (
        <>
            <div className="right-side-bar">
                <div className="card">
                    <div className="heading-section-trending d-flex">
                        <h4 className="w-100">Trend For You</h4>
                        <span className="text-end w-100"><i class="fa-solid fa-gear"></i></span>
                    </div>
                    <div className="card-body">
                        <h6 className="body-heading">TRENDING IN INDIA</h6>
                        {trending.map(createTrendingCard)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSideBar;