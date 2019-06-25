import React from 'react';
import Dialogue from './dialogue.jsx';


class NeighborhoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.calculateNeighborhoodAveragePrice = this.calculateNeighborhoodAveragePrice.bind(this);
    }

    calculateNeighborhoodAveragePrice() {
        var averagePropertyPrice = this.props.properties.reduce((accumulator, value) => {
            return accumulator += value.price;
        }, 0) / this.props.properties.length;
        
        return '$' + Math.round(averagePropertyPrice / 1000) + 'K';
        }



    render() {
        return (
            <div>
                
                <h2 id="pageTitle">Neighborhood: Rego Park</h2>

                <div id="medianZestimateAndMarketTempContainer">

                    <div id="medianZestimateSection">
                        <h5 id="medianZestimateHeader">MEDIAN ZESTIMATE&nbsp;</h5> 
                        <Dialogue buttonClass="questionMarkButton" buttonText="?" linkText1="Learn More" messageLine1="The median Zestimate valuation for a " messageLine2="given geographic area on a given day is " messageLine3="the Zillow Home Value Index." link1="https://www.zillow.com/info/whats-the-zillow-home-value-index/"/>
                        <h2 id="averagePrice">{this.calculateNeighborhoodAveragePrice()}</h2>
                        <img id="zestimateArrow" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Green-Up-Arrow.svg" height="30" width="30"></img>
                        <h5 id="twelveMonthChange">4.3%</h5>
                        <div className="past12MonthsText">Past 12 months</div>
                    </div>

                    <div id="marketTempSection">
                        <div>
                            <h5 id="marketTempHeader">MARKET TEMP&nbsp;</h5>
                            <Dialogue buttonClass="questionMarkButton" buttonText="?" linkText1="Learn More" messageLine1="Based on three metrics—sale-to-list " messageLine2="price ratio, the prevalence of price cuts " messageLine3="on home listings, and time-on-market—" messageLine4="the market temperature provides " messageLine5="information on the current balance of " messageLine6="bargaining power between buyers and " messageLine7="sellers in this metro relative to other " messageLine8="metros across the US. A particular metro" messageLine9="may be identified as a good market for " messageLine10="buyers in a national market favorable to " messageLine11="sellers overall. " link1="https://www.zillow.com/research/understanding-the-zillow-buyer-seller-index-2883/"/>
                        </div>

                        <div>
                            <h2>Very Hot</h2>
                        </div>

                        <div id="temperatureBarContainer">
                            <div id="temperatureBar"></div>
                            <div id="temperature"></div>
                        </div>

                        <div id="buyersMarketText">
                            Buyer's Market
                        </div>

                        <div id="sellersMarketText">
                            Seller's Market
                        </div>
                    </div>

                </div>

                <div id="neighborhoodInfoDescription">
                    <p>Zillow predicts Rego Park home values will rise 0.8% next year, compared to a 4.3% rise for New York as a whole. Among Rego Park homes, this home is valued 11.4% more than the midpoint (median) home, but is valued 68.8% less per square foot.</p>
                    <p id="walkerScore">
                        <img className="scoreIcons" src="https://iconsplace.com/wp-content/uploads/_icons/0000ff/256/png/walking-icon-2-256.png"></img>
                        <Dialogue buttonClass="scoreButtons" buttonText="Walk Score ® &nbsp;" linkText1="Learn More" linkText2="See detailed Walk Score rating" messageLine1="WHAT IS A WALK SCORE?" messageLine2="&nbsp;" messageLine3="Walk Score measures how walkable an " messageLine4="address is based on the distance to " messageLine5="nearby amenities."  link1="https://www.walkscore.com/how-it-works/" link2={`https://www.walkscore.com/score/loc/lat=40.743574/lng=-73.889705/?utm_source=zillow2.com&utm_medium=ws_api&utm_campaign=ws_api`}/>
                        <a id="scoreNumbers" href={`https://www.walkscore.com/score/loc/lat=${this.props.currentProperty.latitude}/lng=${this.props.currentProperty.longitude}/?utm_source=zillow2.com&utm_medium=ws_api&utm_campaign=ws_api`}>{this.props.currentProperty.walkScore}&nbsp;</a>
                        (Walker's Paradise)
                    </p>
                    <p id="transitScore">
                        <img className="scoreIcons" src="https://iconsplace.com/wp-content/uploads/_icons/0000ff/256/png/bus-icon-2-256.png"></img>
                        <Dialogue buttonClass="scoreButtons" buttonText="Transit Score ™&nbsp;" linkText1="Learn how it works" linkText2="See detailed Transit Score rating" messageLine1="WHAT IS A TRANSIT SCORE?" messageLine2="&nbsp;" messageLine3="Transit Score measures how well a " messageLine4="location is served by public " messageLine5="transportation."  link1="http://www.walkscore.com/transit-score.php" link2={`https://www.walkscore.com/score/loc/lat=40.7436/lng=-73.8897/?utm_source=zillow2.com&utm_medium=ts_api&utm_campaign=ts_api`}/>
                        <a id="scoreNumbers" href={`https://www.walkscore.com/score/loc/lat=${this.props.currentProperty.latitude}/lng=${this.props.currentProperty.longitude}/?utm_source=zillow2.com&utm_medium=ts_api&utm_campaign=ts_api`}>{this.props.currentProperty.transitScore}&nbsp;</a>
                        (Excellent Transit)
                    </p>
                </div>
                
            </div>
        );
    }
}

module.exports = NeighborhoodInfo;