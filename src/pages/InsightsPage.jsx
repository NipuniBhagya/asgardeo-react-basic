/* eslint-disable react/no-unknown-property */
import { DefaultLayout } from "../layouts/Default";

export const InsightsPage = () => {
    return (
        <DefaultLayout>
            <div className="graph-container">
                <h2 className="graph-title">Sales Performance</h2>
                <div className="slds-p-top--medium">
                    <div>
                    <svg viewBox="0 0 100 -20" version="1.2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="quiz-graph">
                            <defs>
                                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e5e5e5" strokeWidth="1"></path>
                                </pattern>
                            </defs>
                            <rect x="50" width="calc(100% - 50px)" height="300px" fill="url(#grid)" stroke="gray"></rect>
                            <g className="label-title">
                                <text x="-160" y="5" transform="rotate(-90)">Participants</text>
                            </g>
                            <g className="label-title">
                                <text x="50%" y="350">Questions</text>
                            </g>   
                            <g className="x-labels">
                                <text x="150" y="320">Q1</text>
                                <text x="250" y="320">Q2</text>
                                <text x="350" y="320">Q3</text>
                                <text x="450" y="320">Q4</text>
                                <text x="550" y="320">Q5</text>
                                <text x="650" y="320">Q6</text>
                                <text x="750" y="320">Completed</text>
                            </g>
                            <g className="y-labels">
                                <text x="42" y="5">300</text>   
                                <text x="42" y="55">250</text>
                                <text x="42" y="105">200</text>   
                                <text x="42" y="155">150</text>
                                <text x="42" y="205">100</text>   
                                <text x="42" y="255">50</text>
                                <text x="42" y="305">0</text>
                            </g>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "rgba(99,224,238,.5)", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0 }} />
                            </linearGradient>
                            <polyline fill="url(#grad)" stroke="#34becd" strokeWidth="0" points="
                            50,300
                            51,0
                            150,100
                            250,80
                            350,160
                            450,100
                            550,100
                            650,150
                            750,200
                            750,300
                            "></polyline>

                            <polyline fill="none" stroke="#34becd" strokeWidth="2" points="
                            50,0
                            150,100
                            250,80
                            350,160
                            450,100
                            550,100
                            650,150
                            750,200
                            "></polyline>
                            <g>
                                <circle className="quiz-graph-start-dot" cx="50" cy="0" data-value="7.2" r="6"></circle>
                                <circle className="quiz-graph-dot" cx="150" cy="100" data-value="8.1" r="6" q-title="Q1" answer-count="200" percent-value="66%"></circle>
                                <circle className="quiz-graph-dot" cx="250" cy="80" data-value="7.7" r="6" q-title="Q2" answer-count="220" percent-value="73%"></circle>
                                <circle className="quiz-graph-dot" cx="350" cy="160" data-value="6.8" r="6" q-title="Q3" answer-count="140" percent-value="46%"></circle>
                                <circle className="quiz-graph-dot" cx="450" cy="100" data-value="6.7" r="6" q-title="Q4" answer-count="200" percent-value="66%"></circle>
                                <circle className="quiz-graph-dot" cx="550" cy="100" data-value="6.7" r="6" q-title="Q5" answer-count="200" percent-value="66%"></circle>
                                <circle className="quiz-graph-dot" cx="650" cy="150" data-value="6.7" r="6" q-title="Q6" answer-count="150" percent-value="50%"></circle>
                                <circle className="quiz-graph-dot" cx="750" cy="200" data-value="6.7" r="6" q-title="Complited Quiz" answer-count="100" percent-value="33%"></circle>
                            </g>
                        </svg>
                    </div>
                </div>    
            </div>
            <h2 className="stats">Monthly Statistics</h2>
            <div className='search-bar'>
                <input type='text' placeholder='Account number' />
                <button className='search-button'>Search</button>
            </div>
            <div className='insights-container'>
                <section className='card electricity'>
                    <div className='card-icon'>🧑‍💻</div>
                    <div className='card-content'>
                        <h2>12,000+</h2>
                        <p>Active Users</p>
                        <a href='#' className='service-link'>
                            View users <span>➔</span>
                        </a>
                    </div>
                </section>
                <section className='card gas'>
                    <div className='card-icon'>📈</div>
                    <div className='card-content'>
                        <h2>$4,800,000</h2>
                        <p>User Accounts</p>
                        <a href='#' className='service-link'>
                            View report <span>➔</span>
                        </a>
                    </div>
                </section>
                <section className='card tax'>
                    <div className='card-icon'>📺</div>
                    <div className='card-content'>
                        <h2>500+</h2>
                        <p>Movies and TV Shows</p>
                        <a href='#' className='service-link'>
                            View all <span>➔</span>
                        </a>
                    </div>
                </section>
                <section className='card tax'>
                    <div className='card-icon'>🗂</div>
                    <div className='card-content'>
                        <h2>120</h2>
                        <p>Partners</p>
                        <a href='#' className='service-link'>
                            View all <span>➔</span>
                        </a>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
};
