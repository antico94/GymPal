import React from 'react';
import './has.css'

const Has = () => {
    return (<div className="health-and-safety">
        <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Health and safety rules</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col d-flex align-items-start" id="rules">
                    <div>
                        <h2>Rule 1</h2>
                        <p>Leave other people alone, don’t disrupt other members workouts and be polite.

                            Yes polite, a foreign concept in this day and age, but trust us it pays dividends. We
                            all need a little bleeper sometimes after a heavy set, but keep swearing to a minimum
                            and don’t scream it at the top of your voice! </p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div>
                        <h2>Rule 2</h2>
                        <p>We love that you look great, we want you to look great, but the gym floor is not the
                            place to whip off your shirt or worse, your shorts! No jeans or clothes with rivets, it
                            damages the equipment and you look like an idiot. Gym kit is really not that expensive
                            and with our prices being so low you have no excuse. </p>

                    </div>
                </div>
                <div className="col d-flex align-items-start">

                    <div>
                        <h2>Rule 3</h2>
                        <p>If you are not sure ask a member of staff or a personal trainer. If you cause damage to
                            any of the equipment due to idiotic behaviour, we will make you pay for it and you will
                            be shocked at just how expensive gym equipment is. </p>

                    </div>
                </div>
                <h3 className="col d-flex justify-content-center">Start Test</h3>
            </div>

        </div>
    </div>);
};

export default Has;