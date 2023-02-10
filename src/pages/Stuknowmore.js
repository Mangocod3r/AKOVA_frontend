import Header from '../components/header_s';
import Footer from '../components/footer'

export function Stuknowmore() {
    return (
            <>
            <Header></Header>
                <div className="container-fluid main">  
        <div className="col">
          <div className="row-sm-4">
            <h1 className="text-center p-4"><em>FACE MASK DETECTION</em></h1>
            <div className="shadow p-3 mb-5 bg-red rounded">
              <div className="text-center">
                {/* <div class="text-center shadow p-3 mb-5 bg-white rounded" > */}
                {/* <h2><em>FACE MASK DETECTION</em></h2> */}
              </div>
              <h3>Problem Statement : </h3>
              <p style={{fontSize: '20px'}}>
                During the time of this pandemic, there are some strict regulations that need to be followed to maintain the decorum of the city, state, or country. Since we can’t always have the official authority on the lookout for some people not abiding by the rules, we can construct a <b>face mask detection</b> project that will enable us to figure out if a particular person is wearing a mask or not. During this time, with strict regulations of the lockdown, it would be a brilliant idea to implement this project to contribute to the upkeeping of the society.
              </p>
              <p style={{fontSize: '20px'}}>
                Hence, a project in which you can process images of an entire area or region by tracking people on the road or streets to analyze if they are wearing masks or not would be a spectacular idea. With the help of image processing algorithms and deep learning techniques, you can compute images of people who are wearing masks.
              </p>
              <div className="text-right">
                <i className="bi bi-calendar-plus" style={{fontSize: '20px'}}>
                  26 Dec, 2022
                </i>
                <p />
                <i className="bi bi-calendar-minus" style={{fontSize: '20px'}}>
                  26 Jan, 2023
                </i>
              </div>
            </div>    
          </div>
          <div className="row-sm-4">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Enter your idea</label>
                {/* <div class="text-right"> */}
                <button type="button" className="btn btn-outline btn-light">
                  <i className="bi bi-link-45deg" style={{fontSize: '30px', color: 'green'}} />
                </button>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={10} defaultValue={""} />
              </div>
            </form>  
          </div>
          <div className="display-5 text-center">
            <button type="button" className="btn btn-success">
              SUBMIT IDEA
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
            </button>
          </div>
          <div><p /></div>
        </div>
      </div>
      <Footer></Footer>
            </>
            )
}
