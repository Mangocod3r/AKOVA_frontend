import Header from '../components/header_e'
import Footer from '../components/footer'

export function Entupload() {
    return (
        <>
        <Header></Header>
        <div className="container-fluid main" style={{ paddingTop: 128 }}>
        <form>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer01">First name</label>
              <input type="text" className="form-control " id="validationServer01" placeholder="First name" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer02">Last name</label>
              <input type="text" className="form-control" id="validationServer02" placeholder="Last name" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServerUsername">Project Title</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                </div>
                <input type="text" className="form-control " id="validationServerUsername" placeholder="Title name" aria-describedby="inputGroupPrepend3" required />
                <div className="invalid-feedback">
                  Please choose a title.
                </div>
              </div>
            </div>
          </div>
          <div className="form-row mb-4">
            <label htmlFor="exampleFormControlTextarea1">Problem Statement</label>
            <textarea className="form-control " id="exampleFormControlTextarea1" rows={10} placeholder="Enter here..." required defaultValue={""} />
            {/* <input type="text" class="form-control " id="validationServer03" placeholder="City" required> */}
            <div className="invalid-feedback">
              Please provide a statement for problem.
            </div>
          </div>
          <div className="form-row">
            {/* <div class="col-md-6 mb-3">
        <label for="validationServer03">City</label>
        <input type="text" class="form-control " id="validationServer03" placeholder="City" required>
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div> */}
            <div className="col-md-3 mb-4">
              <label htmlFor="validationServer04">Start Date</label>
              <input type="text" className="form-control " id="validationServer04" placeholder="Start Date (DD/MM/YY)" required />
              <div className="invalid-feedback">
                Please provide a valid start date.
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <label htmlFor="validationServer05">End Date</label>
              <input type="text" className="form-control " id="validationServer05" placeholder="End Date (DD/MM/YY)" required />
              <div className="invalid-feedback">
                Please provide a valid end date.
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck2" required />
              <label className="form-check-label ml-4" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
      <Footer></Footer>
      </>
    )
}