import React from 'react'

export const ProjectsSection = () => { 
    return(
        <section data-scroll-index={3} className="section work-section bg-gray">
  <div className="container">
    <div className="row section-heading">
      <div className="col-lg-6">
        <h6>
          <span>Portfolio</span>
        </h6>
        <h3>
          <span>Latest Projects</span>
        </h3>
      </div>
    </div>
    <div className="row g-4 lightbox-gallery">
      <div className="col-sm-6 col-lg-4">
        <div className="portfolio-box">
          <div className="portfolio-img">
            <a href="assets/img/project-1.jpg" className="gallery-link">
              <img src="assets/img/project-1.jpg" title="" alt="" />
            </a>
          </div>
          <div className="portfolio-info">
            <h6>Agency Landing page</h6>
            <span>Web/WordPress</span>
            <a href="assets/img/project-1.jpg" className="gallery-link">
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="portfolio-box">
          <div className="portfolio-img">
            <a href="assets/img/project-2.jpg" className="gallery-link">
              <img src="assets/img/project-2.jpg" title="" alt="" />
            </a>
          </div>
          <div className="portfolio-info">
            <h6>Agency Landing page</h6>
            <span>Web/WordPress</span>
            <a href="assets/img/project-2.jpg" className="gallery-link">
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="portfolio-box">
          <div className="portfolio-img">
            <a href="assets/img/project-3.jpg" className="gallery-link">
              <img src="assets/img/project-3.jpg" title="" alt="" />
            </a>
          </div>
          <div className="portfolio-info">
            <h6>Agency Landing page</h6>
            <span>Web/WordPress</span>
            <a href="assets/img/project-3.jpg" className="gallery-link">
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="portfolio-box">
          <div className="portfolio-img">
            <a href="assets/img/project-4.jpg" className="gallery-link">
              <img src="assets/img/project-4.jpg" title="" alt="" />
            </a>
          </div>
          <div className="portfolio-info">
            <h6>Agency Landing page</h6>
            <span>Web/WordPress</span>
            <a href="assets/img/project-4.jpg" className="gallery-link">
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="portfolio-box">
          <div className="portfolio-img">
            <a href="assets/img/project-5.jpg" className="gallery-link">
              <img src="assets/img/project-5.jpg" title="" alt="" />
            </a>
          </div>
          <div className="portfolio-info">
            <h6>Agency Landing page</h6>
            <span>Web/WordPress</span>
            <a href="assets/img/project-5.jpg" className="gallery-link">
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="portfolio-box">
          <div className="portfolio-img">
            <a href="assets/img/project-6.jpg" className="gallery-link">
              <img src="assets/img/project-6.jpg" title="" alt="" />
            </a>
          </div>
          <div className="portfolio-info">
            <h6>Agency Landing page</h6>
            <span>Web/WordPress</span>
            <a href="assets/img/project-6.jpg">
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
 }
