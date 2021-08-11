import React from 'react'
import {Bill2 , Bill3 , KWK} from '../../assets'
import './investor.scss'

function Index() {
    return (
        <div className="investor">
            <div className="content">
                <h3 className="content-title">Help build BILL into a greater company with greater result</h3>
                <div className="main-content">
                    <div className="content-img">
                        <img className="img" src={Bill2} />
                    </div>

                    <div className="content-desc">
                        <p>Bill is currently a payment app for businesses with high numbers of daily transaction 
                            .Bill has won an exclusive 5 year contract with discounted cash-flow
                            value of {'>'} 10million USD. Bill main feature is a smartphone-based electronic
                            money app that was developed to serve high numbers of daily transactions for businesses 
                            that serves the unbanked population in Indonesia. This includes public transportation,retail,
                            minimarket,convenient stores , supermarkets , food , market , bakery 
                        </p>
                    </div>
                </div>
            </div>


            <div className="content2">
                
                <div className="main-content">

                    <div className="content-desc">
                        <h3 className="content-title">Why Bill?</h3>

                        <p>We have been awarded an exclusive contract with indonesia's largest 
                            public transportation organization, which has a daily trafic of {'>'} 5 
                            million passengers (pre-COVID) and are currently in stage 1 of rolling out 
                            the BILL cashless payments is an urgent priority in these COVID times to 
                            minimize contact and with extremely low credit card adoption (circa 2 to 3%) cash
                            dependent unbanked population (est {'>'}60% of the population) desparately need a payment solution 
                            that is designed specifically for the unbanked and underbanked
                        </p>
                    </div>

                    <div className="content-img">
                        <img className="img" src={Bill3} />
                    </div>

                    
                </div>
            </div>

            <div className="investor-info">
                    
                        <p className="info">
                            Bill Indonesia is eager to help the unbanked Indonesian to welcome the new 
                            digital payment and help Indonesia develop as a country , starting from the 
                            people. We provide the platfrom and education to build a strong community with 
                            #BersamaBill. Bill Indonesia aims to be the best fintech application that is easy to 
                            use and understand for everyone in Indonesia  
                        </p>
                    
            </div>

            <div className="partnership">
                <h3>Our Partner</h3>

                <img src={KWK} width="200" height="200" />
            </div>
        </div>
    )
}

export default Index
