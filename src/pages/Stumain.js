import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from '../components/header_s'
import Footer from '../components/footer'


export function Stumain() {
    return (


<>

  {/* <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-dark">
    <div className="container">
      <a className="nav-Link active" href="stu_final.html">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="currentColor"
          className="bi bi-house-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        </svg>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar1">
        <ul className="navbar-nav nav nav-fill w-100">
          <li className="nav-item">
            <div className="col-xl p-2">
              <div className="input-group">
                <div className="input-group-btn search-panel">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span id="search_concept">Filter by</span>
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="#contains">ARTIFICIAL INTELLIGENCE</a>
                    </li>
                    <li>
                      <a href="#its_equal">CLOUD COMPUTING</a>
                    </li>
                    <li>
                      <a href="#greather_than">DATA SCIENCE</a>
                    </li>
                    <li>
                      <a href="#less_than">DATA ANALYTIcS</a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#all">AGRICULTURE</a>
                    </li>
                  </ul>
                </div>
                <div className="input-group">
                  <input
                    type="hidden"
                    name="search_param"
                    defaultValue="all"
                    id="search_param"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="x"
                    placeholder="Search projects..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-search" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-Link text-light" href="stu_ideas.html">
              Your Project Ideas
            </a>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle ml-4"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </a>
              <div
                className="dropdown-menu mr-8"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  My profile
                </a>
                <a className="dropdown-item" href="#">
                  My account
                </a>
                <a className="dropdown-item" href="#">
                  My acheivements
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
  {/* <Header></Header> */}
  <div className="container-fluid main" style={{ paddingTop: 32 }}>
    <Header></Header>
  <Carousel >
      <Carousel.Item >
      <img
            className="d-block w-100 mx-auto"
            src="https://media.istockphoto.com/id/817972136/photo/education-and-business-background.jpg?s=612x612&w=0&k=20&c=GTVoTrSKzFiptpCaccBoDLBkE-80AUwXkUsqkjyToOU="
            alt="First slide"
            // style={{ maxWidth: "80%" }}
          />
        <Carousel.Caption>
        <h5>CLOUD COMPUTING</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100 mx-auto"
            src="https://media.istockphoto.com/id/925425860/photo/in-laboratory-scientist-wearing-virtual-reality-headset-sitting-in-a-chair-interacts-with.jpg?s=612x612&w=0&k=20&c=H6F3YaSVso1qpZuExxJEui1zsc1vUePtsSlF690YYD0="
            alt="Second slide"
            // style={{ maxWidth: "80%" }}
          />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100 mx-auto"
            src="https://media.istockphoto.com/id/1205195628/photo/3d-illustration-technology-hexagon-background-and-data-artificial-intelligence-algorithms.jpg?s=612x612&w=0&k=20&c=ez1zrD17SO_XmYdpGqylhMDO1MteJX4DY9GX3rEjcrw="
            alt="Third slide"
            // style={{ maxWidth: "80%" }}
          />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" style={{ maxHeight: 625 }}>
        <div className="carousel-item active">
          <img
            className="d-block w-100 mx-auto"
            src="https://media.istockphoto.com/id/817972136/photo/education-and-business-background.jpg?s=612x612&w=0&k=20&c=GTVoTrSKzFiptpCaccBoDLBkE-80AUwXkUsqkjyToOU="
            alt="First slide"
            style={{ maxWidth: "80%" }}
          />{" "}
          <div className="carousel-caption d-none d-md-block mb-5">
            <h5>CLOUD COMPUTING</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 mx-auto"
            src="https://media.istockphoto.com/id/925425860/photo/in-laboratory-scientist-wearing-virtual-reality-headset-sitting-in-a-chair-interacts-with.jpg?s=612x612&w=0&k=20&c=H6F3YaSVso1qpZuExxJEui1zsc1vUePtsSlF690YYD0="
            alt="Second slide"
            style={{ maxWidth: "80%" }}
          />
          <div className="carousel-caption d-none d-md-block mb-5">
            <h5>VIRTUAL REALITY</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 mx-auto"
            src="https://media.istockphoto.com/id/1205195628/photo/3d-illustration-technology-hexagon-background-and-data-artificial-intelligence-algorithms.jpg?s=612x612&w=0&k=20&c=ez1zrD17SO_XmYdpGqylhMDO1MteJX4DY9GX3rEjcrw="
            alt="Third slide"
            style={{ maxWidth: "80%" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>DATA SCIENCE</h5>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>*/}
    <h1
      className="text-center"
      style={{ paddingTop: "15%", paddingBottom: "5%", fontWeight: 600 }}
    >
      AVAILABLE CATEGORIES
    </h1>
    <div className="row">
      <div className="col-sm-4">
        <a href="stu_viewmore">
          <div className="text-center shadow p-3 mb-5 bg-white rounded">
            <img
              src="https://media.istockphoto.com/id/1223301957/photo/artificial-intelligence-technology.jpg?s=612x612&w=0&k=20&c=3GSFioDKwb8jSN0lH-ZmMyiA66dzw6kkQV3Hjd0SNU4="
              className="img-fluid"
              alt=""
            />
            <div>
              <h5>
                <span style={{ fontWeight: 600 }}>MACHINE </span>LEARNING
              </h5>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-4">
        <div className="text-center shadow p-3 mb-5 bg-white rounded">
          <img
            src="https://media.istockphoto.com/id/1345658982/photo/ai-microprocessor-on-motherboard-computer-circuit.jpg?s=612x612&w=0&k=20&c=Kah6k5RDjasNEzJMjr8kSuYNN5LJ3CKTz4ZGLiCW2Fs="
            className="img-fluid"
            alt=""
          />
          <div>
            <h5>
              <span style={{ fontWeight: 600 }}>ARTIFICIAL </span>INTELLIGENCE
            </h5>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="text-center shadow p-3 mb-5 bg-white rounded">
          <img
            src="https://media.istockphoto.com/id/1398626478/photo/global-business-finance-gdp-graph-chart-report-stock-exchange-market-trading-investment-and.jpg?s=612x612&w=0&k=20&c=LaoYFmR5KqhHPrC7z2UdbvqmE19aie6QtrFS29qBwkE="
            className="img-fluid"
            alt=""
          />
          <div>
            <h5>
              <span style={{ fontWeight: 600 }}>DATA </span>SCIENCE
            </h5>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="text-center shadow p-3 mb-5 bg-white rounded">
          <img
            src="https://media.istockphoto.com/id/1145589623/photo/cloud-computing.jpg?s=612x612&w=0&k=20&c=8J35wj6OztvdGxiRLDTloq7IgoJDT5GvzOgT34_gS0M="
            className="img-fluid"
            alt=""
          />
          <div>
            <h5>
              <span style={{ fontWeight: 600 }}>CLOUD </span>COMPUTING
            </h5>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="text-center shadow p-3 mb-5 bg-white rounded">
          <img
            src="https://media.istockphoto.com/id/1152502981/photo/turkish-student-group-are-developing-the-robot-in-the-classrom.jpg?s=612x612&w=0&k=20&c=_gv59WkLFNLkwA5pl0n5tWX4CAwAsV6XdMt2UsGj5aw="
            className="img-fluid"
            alt=""
          />
          <div>
            <h5>
              <span style={{ fontWeight: 600 }}>ROBO</span>TICS
            </h5>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="text-center shadow p-3 mb-5 bg-white rounded">
          <img
            src="https://media.istockphoto.com/id/907966126/photo/tractor-spraying-pesticides-on-vegetable-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=rxWT-PjibwcLsIUu4Zd-pa_zTdISmaoth0rjgLCURSg="
            className="img-fluid"
            alt=""
          />
          <div>
            <h5>
              <span style={{ fontWeight: 600 }}>AGRI</span>CULTURE
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</>

)
}

