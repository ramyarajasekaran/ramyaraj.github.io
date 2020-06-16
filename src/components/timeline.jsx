import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Salesforce <span>July 2020</span></h2>
                        <p>I'm planning to start my first real job next month! Mom, I made it!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internships <span> June 2017 - August 2019</span></h2>
                        <p>During my summers in college, I interned at Salesforce, Poly (formerly known as Plantronics), and IndusInd Bank. I learnt a great deal about myself and technology during each of my internships. I'm grateful to everyone that gifted me with these amazing opportunities. I wouldn't be where I am today without their guidance.</p>
                      </div>
                    </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.S in Electrical and Computer Engineering<span> August 2016 - May 2020</span></h2>
                        <p>I graduated from the University of Texas at Austin with a specialization in software engineering. During my time there, I enjoyed classes dealing with distributed systems and data science techniques. I was involved in a few student organizations including Women in Electrical and Computer Engineering(WECE) and the Psi Chapter of Eta Kappa Nu (HKN). I met some of the smartest people I know and made some great friends. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary Education <span>June 2004 - May 2016</span></h2>
                        <p>Fun fact. I completed all of my schooling in South India. As expected with any Asian school, my education had a greater focus on science and mathematics. Needless to say, I had a lot of fun.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}