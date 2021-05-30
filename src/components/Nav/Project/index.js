import React from "react";

function Project() {
  return (
    <section className='portfolio-page'>
      <h2 className='section-header'>PORTFOLIO</h2>
      <div className='container'>
        <div className='portfolio'>
          <div>
          <div>
              <p className='p-port'>Taroble Cards</p>
              <div className='img-container'>
                <div className='taroble'></div>
                <p className='tech'>Technologies Used: MERN Stack, GraphQL, Apollo, React-Spring, SVGator</p>
                <button className='port-btn'>
                  <a href='https://github.com/MeaghanCampbell/taroble-cards'>
                    Github Repo
                  </a>
                </button>
                <button className='port-btn'>
                  <a href='https://taroble-cards.herokuapp.com/'>
                    Deployed App
                  </a>
                </button>
              </div>
            </div>

            <div>
              <p className='p-port'>Rock<em>fit</em></p>
              <div className='img-container'>
                <div className='rockfit'></div>
                <p className='tech'>Technologies Used: Node.js, Express.js, Sequlize, Handlebars.js, CSS</p>
                <button className='port-btn'>
                  <a href='https://github.com/MeaghanCampbell/rock-fit'>
                    Github Repo
                  </a>
                </button>
                <button className='port-btn'>
                  <a href='https://rockfitapp.herokuapp.com/'>
                    Deployed App
                  </a>
                </button>
              </div>
            </div>

            <div>
              <p className='p-port'>CryptoStock Wallet</p>
              <div className='img-container'>
                <div className='crypto'></div>
                <p className='tech'>Technologies Used: JavaScript, JQuery, Semantic UI, CoinLore API, Alpha Vantage API, HTML, CSS</p>
                <button className='port-btn'>
                  <a href='https://github.com/joelecox1/crypto-stock-compare'>
                    Github Repo
                  </a>
                </button>
                <button className='port-btn'>
                  <a href='https://joelecox1.github.io/crypto-stock-compare/'>
                    Deployed App
                  </a>
                </button>
              </div>
            </div>

            <div>
              <p className='p-port'>Pure HTML/CSS Portfolio</p>
              <div className='img-container'>
                <div className='html-portfolio'></div>
                <p className='tech'>Technologies Used: HTML, CSS</p>
                <button className='port-btn'>
                  <a href='https://github.com/joelecox1/portfolio'>
                    Github Repo
                  </a>
                </button>
                <button className='port-btn'>
                  <a href='https://joelecox1.github.io/portfolio/'>
                    Deployed Page
                  </a>
                </button>
              </div>
            </div>

            <div>
              <p className='p-port'>Weather Dashboard</p>
              <div className='img-container'>
                <div className='dashboard'></div>
                <p className='tech'>Technologies Used: JavaScript, Third Party API, Local Storage, Bootstrap, HTML</p>
                <button className='port-btn'>
                  <a href='https://github.com/joelecox1/weather-dashboard'>
                    Github Repo
                  </a>
                </button>
                <button className='port-btn'>
                  <a href='https://joelecox1.github.io/weather-dashboard'>
                    Deployed App
                  </a>
                </button>
              </div>
            </div>

            <div>
              <p className='p-port'>Work Day Scheduler</p>
              <div className='img-container'>
                <div className='planner'></div>
                <p className='tech'>Technologies Used: JavaScript, JQuery, Third Party API, Bootstrap, HTML</p>
                <button className='port-btn'>
                  <a href='https://github.com/joelecox1/work-day-scheduler'>
                    Github Repo
                  </a>
                </button>
                <button className='port-btn'>
                  <a href='https://joelecox1.github.io/work-day-scheduler'>
                    Deployed App
                  </a>
                </button>
              </div>
            </div>

            <div>
              <p className='p-port'>React Built Professional Portfolio</p>
              <div className='img-container'>
                <div className='react-portfolio'></div>
                <p className='tech'>Technologies Used: React, JavaScript, JSX, CSS</p>
                <button className='port-btn'>
                  <a href='https://github.com/joelecox1/joel-cox-react-portfolio'>
                    Github Repo
                  </a>
                </button>
                <button className='port-btn'>
                  <a href='https://joelecox1.github.io/joel-cox-react-portfolio'>
                    Deployed Page
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Project;
