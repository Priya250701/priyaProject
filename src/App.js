import './App.css';

function App() {
  return (
    
    
          <div className="container">
            <div className="container_one">
              <div className="content">
                <div className="contents">
                  <div className="little_box flex">
                    <img src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png" width="30px" height="20px" />
                    {/* <div ></div> */}
                  </div>
                  <div>
                    <div className="texth1">HYUNDAI</div>
                    <div className="paragraph ">The quest for the best <br />runs in every mind when<br /> there is a celebration <br />that is waiting to take<br /> place.
                    </div>
                  </div>
                </div>
                <div className="contents">
                  <div className="little_box flex">
                    <img src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png" width="30px" height="20px" />
                  </div>
                  <div>
                    <div className="texth1">BMW</div>
                    <div className="paragraph ">100 % electric.100 %<br /> driving pleasure.100 % <br />BMW.Experience an <br />entirely new sensation of<br /> sheer driving pleasure. 
                    </div>
                  </div>
                </div>
                <div className="contents">
                  <div className="little_box flex">
                    <img src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png" width="30px" height="20px" />
                  </div>
                  <div>
                    <div className="texth1">HONDA</div>
                    <div className="paragraph "> Honda Cars India Ltd.,<br /> abbreviated as HCIL,<br /> is an automobile<br /> manufacturer in India<br />owned by ... Content<br />is available under<br />CC BY-SA 4.0 unless<br />otherwise noted.
                    </div>
                  </div>
                </div>
              </div>
              <div className="Login">
                <div className="title child">Register Form</div>
                <div className="cnt">
                  <div>
                    <div className="child">
                      <label>Field :</label>
                      <input type="text" name="fname" id="field" placeholder="Enter Your field" />
                    </div>
                    <div className="child">
                      <label> Customer Name:</label>
                      <input type="text" name="fname" id="name" placeholder="Enter customer name" />
                    </div>
                    <div className="child">
                      <label> Customer Email :</label>
                      <input type="email" id="mail" placeholder="123@gmail.com" />
                    </div>
                  </div>
                  <div>
                    <div className="child">
                      <label>Customer Phone :</label>
                      <input type="number" name="phone" id="number" />
                    </div>
                    <div className="child">
                      <label>Vechicle Make :</label>
                      <select name="Vechicle Make" id="make">
                        <option value disabled selected hidden>select</option>
                        <option value="HYUNDAI">HYUNDAI</option>
                        <option value="BMW">BMW</option>
                        <option value="HONDA">HONDA</option>
                      </select>
                    </div>
                    <div className="child">
                      <label> Vechicle Model :</label>
                      <select name=" Vechicle Model" id="model">
                        <option value disabled selected hidden>select</option>
                        <option value="VENUE">Venue</option>
                        <option value="BMW X7">Bmw x7</option>
                        <option value="HONDA CITY">Honda City</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="childs">
                  <label>Vechicle Year :</label>
                  <input type="text" id="year" /> 
                </div>
                <div className="childs">
                  <label>Vechicle VIN :</label>
                  <input type="text" id="VIN" />
                </div>
                <div className="childs">
                  <label> Part Name :</label>
                  <input type="text" id="partname" />
                </div>
                <div className="childs">
                  <label> Part Number :</label>
                  <input type="text" id="partnumber" />
                </div>
                <div className="childs">
                  <label>Quantity :</label>
                  <input type="number" id="quantity" />
                </div>
                <div className="childs">
                  <label>Shipping Address :</label>
                  <input type="text" id="address" />
                </div>
                <div className="childs">
                  <label>Payment Method :</label>
                  <select name="Payment Method" id="pay" style={{fontSize: 'small'}}>
                    <option value disabled selected hidden>select</option>
                    <option value="CASH">CASH</option>
                    <option value="UPI">UPI</option>
                    <option value="CARD">CARD</option>
                  </select>
                </div>
                <div className="childs">
                  <label>Notes :</label>
                  <input type="text" id="notes" />
                </div>
                <div className>
                  <input type="checkbox" />
                  <label style={{fontSize: '12px'}}>i agree with all terms and conditions and privacy policies of
                    evolko</label>
                </div>
                <div className="children" style={{paddingLeft: '150px'}}>
                  <button onclick="signupdata()" type="button">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
 
export default App;
