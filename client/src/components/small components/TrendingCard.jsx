const TrendingCard = (props) => {

    return <>
        <div className="trending-card">
            <div className="row">
                <div className="col-sm-10 left-side">
                    <h6>#{props.name}</h6>
                    <p>{props.tweets} Tweets</p>
                </div>
                <div className="col-sm-2 right-side">
                    <i class="fa-solid fa-ellipsis"></i>
                    <span className="option-icon"></span>
                </div>
            </div>
        </div>
    </>

}

export default TrendingCard;