import React, {Component} from "react";
import $ from 'jquery'
import './features.css'

class Features extends Component {
    componentDidMount() {
        (function () {
            var selectors = {
                nav: '#data-features-nav', tabs: '#data-features-tabs', active: '.__active'
            }
            var classes = {
                active: '__active'
            }
            $('a', selectors.nav).on('click', function () {
                let $this = $(this)[0];
                $(selectors.active, selectors.nav).removeClass(classes.active);
                $($this).addClass(classes.active);
                $('div', selectors.tabs).removeClass(classes.active);
                $($this.hash, selectors.tabs).addClass(classes.active);
                return false
            });
        }());

        $(".btn-with-icon").on("click", function () {
            $(".wave-anim").addClass('visible').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function () {
                $(".wave-anim").removeClass('visible');
            });
        });
    }

    render() {


        return (<div className="features-div">
            <section id="features" className="features">
                <div className="box foo">
                    <h3 className="features-title">Features</h3>
                    <div className="features-content">
                        <div id='data-features-tabs' className="features-content-col">
                            <div id="feature-1" className="features-textblock animated fadeIn __active">
                                <h2>User Profile</h2>
                                <p>It is very important for an user to create a Gym Pal profile. Your profile
                                    is an overview of general information about yourself, and the skill sets that you
                                    possess.</p>
                                <ul>
                                    <li>Creating a profile allows you to save all program opportunities in which
                                        you are interested, and to come back at a later time to resume your program.
                                    </li>
                                    <li>Creating a profile also allows other Gym Pal members to search for you,
                                        based off of the information and project preference you have entered.
                                    </li>
                                    <li>Also, your
                                        profile information will appear across all of your applications so that you
                                        don’t
                                        have to re-enter the basic informations every time.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-2" className="features-textblock animated fadeIn">
                                <h2>Track your evolution.</h2>
                                <p>With a fitness tracker on, you want to keep up with the goals it projects. This is
                                    because regular reminder boosts your motivation levels. A fitness tracker lets you
                                    record your exercise statistics. It generates detailed info-graphics and reports so
                                    that you can look how far you have come.</p>
                                <ul>
                                    <li>While your fitness journey can be topped up by a fitness band as it helps you in
                                        various ways, like tracking your heart rate. Similarly, it's always a good
                                        choice to top-up your health plan with the help of Super Top-up​ that adds a lot
                                        of benefits to shield your health
                                    </li>
                                    <li>To achieve the best results, you will have to set a realistic goal that can be
                                        achieved. You cannot shed weight if you lead a sedentary life and do not
                                        exercise. However, if you use a fitness tracker, it will help you set and
                                        achieve realistic goals within the recommended time frame. It also makes sure
                                        that you do not get de-motivated and quit midway.
                                    </li>
                                    <li>Regular use of fitness tracker boosts your daily workouts and makes them
                                        achievable. Most trackers have built in screens, statistics, vibrating alarms,
                                        and history tracking. These features make it easy for users to check their
                                        progress instantly without interrupting their workout sessions.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-3" className="features-textblock animated fadeIn">
                                <h2>Extra motivation by unlocking Achievements</h2>
                                <p>Regardless of whether you call them achievements, trophies, badges, medals, or
                                    whatever, these digital rewards act best as incentives for gamers to finish games,
                                    try out new features and exercises, and experiment with the offered tools in order
                                    to unlock them.</p>
                                <ul>
                                    <li> Because effort is more directly under our control, we can achieve more by
                                        exercising self-discipline and putting in more effort. Grit, a form of
                                        self-discipline combined with high passion for something, is a particularly
                                        desirable trait that correlates with success in various educational settings.
                                    </li>
                                    <li>Many other factors are important in accomplishment. Believing in our ability
                                        increases performance and likelihood of success. In fact, having others who
                                        believe in us also improves our performance, as do social relationships. The
                                        belief that we can change through effort is called a growth mindset, compared to
                                        a fixed mindset. IQ accounts for only about 20% of success.
                                    </li>
                                    <li>To give ourselves the best chance of success, we need to make our goals even
                                        more meaningful, commit to them with passion, start taking action, and focus on
                                        intrinsic motivation.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-4" className="features-textblock animated fadeIn">
                                <h2>Privacy Matters: Your Data Is Safe With Us</h2>
                                <p>In an age of unsolicited emails, you can trust Cleaner Today to keep your information
                                    confidential. We never share your email addresses with any third party and we never
                                    send unwanted emails to you. We are a company that will protect and safeguard the
                                    privacy of our customers. See our privacy policy below for the details of our pledge
                                    to your privacy.</p>
                                <ul>
                                    <li>We implement a variety of security measures to maintain the safety of your
                                        personal information. Your personal information is contained behind secured
                                        networks and is only accessible by a limited number of persons who have special
                                        access rights to such systems, and are required to keep the information
                                        confidential.
                                    </li>
                                    <li> When you place orders or access your personal information, we
                                        offer the use of a secure server. All sensitive/credit information you supply is
                                        transmitted via Secure Socket Layer (SSL) technology and then encrypted into our
                                        databases to be only accessed as stated above.
                                    </li>
                                    <li>If we decide to change our privacy policy, we will post those changes to this
                                        privacy statement, the home page, and other places we deem appropriate so that
                                        you are aware of what information we collect, how we use it, and under what
                                        circumstances, if any, we disclose it.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-5" className="features-textblock animated fadeIn">
                                <h2>Tailor-made for you</h2>
                                <p>Everyone is different, the complexity of the humans makes it impossible to have two
                                    people exactly the same. That why with
                                    data you provide us about you and your goals, we are able to build and recommend
                                    workouts specially designated for you in order to
                                    achieve your goal in the optimal amount of time.</p>
                                <ul>
                                    <li>We know it's 2022 and it may not be Politically Corect to ask for peoples gender
                                        and other sensitive information.
                                        However we need this data in order to customise your workout routine, you
                                        maximum stress load and many more factors.
                                    </li>
                                    <li>Where do you see yourself in 5 years? It's a question that we all have been
                                        asked at some point in our lives.
                                        Even if the first instinct is to hate it, because of the unpredictability of the
                                        future, it's great to have goals,
                                        and if you share them with us, we can help you to achieve them.
                                    </li>
                                    <li>Even if your goals are herculean, we will take care to always track your
                                        evolution and will never put your health at risk by recommending
                                        you exercises that you are not ready for or to lift weights that will overwhelm
                                        you. We will make sure that your growth will be as organic,
                                        and risk free as possible.
                                    </li>
                                </ul>
                            </div>
                            <div id="feature-6" className="features-textblock animated fadeIn">
                                <h2>Get the Most Out of Your Workout</h2>
                                <p>Every exercise and nutrition plan in each program uses the most scientifically
                                    effective methods for obtaining the attractive physique you want. This way, you’ll
                                    reach your goals in the shortest time without wasting any energy.</p>
                                <ul>
                                    <li>Training volume—your number of reps multiplied by your number of sets—is a
                                        primary determiner of hypertrophy (aka how to grow muscle). And to increase
                                        volume, you may actually need to go lower in weight than you might guess.
                                    </li>
                                    <li>Exercise training breaks down your muscles. Protein builds them back up. And the
                                        harder your lifting workouts, the more important of the muscle-building foods to
                                        consider is protein intake to solidify recovery, Fitzgerald explains.
                                    </li>
                                    <li>This can be a hard one to get used to, especially for those who are used to
                                        counting calories in the hopes of losing weight. But to most effectively build
                                        muscle mass quickly (that means weight gained, not lost), you need to consume
                                        more calories than you burn each day.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="features-content-col">
                            <div id='data-features-nav' className="features-graph">
                                <div className="button-holder">
                                    <a href="#feature-1" className="icon-features-1 btn-with-icon __active" id="icon-1">
                                        <span className="sq-bt-label label-top-left">User Profile</span>
                                    </a>
                                    <a href="#feature-2" className="icon-features-2 btn-with-icon">
                                        <span className="sq-bt-label label-top">Statistics</span>
                                    </a>
                                    <a href="#feature-3" className="icon-features-3 btn-with-icon">
                                        <span className="sq-bt-label label-top-right">Achievements</span>
                                    </a>
                                </div>
                                <div className="animation-holder">
                            <span className="flash-oval">
                           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/flash.png" alt="pulse"/>
                           <div className="wave hidden wave-anim"/>
                           <div className="wave2 hidden wave-anim"/>
                           <div className="wave3 hidden wave-anim"/>
                           <div className="wave4 hidden wave-anim"/>
                        </span>
                                </div>
                                <div className="button-holder">
                                    <a href="#feature-4" className="icon-features-4 btn-with-icon">
                                        <span className="sq-bt-label label-bottom-left">Security</span></a><a
                                    href="#feature-5" className="icon-features-5 btn-with-icon"><span
                                    className="sq-bt-label label-bottom">adaptability</span></a><a href="#feature-6"
                                                                                                   className="icon-features-6 btn-with-icon"><span
                                    className="sq-bt-label label-bottom-right">Efficiency</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default Features;