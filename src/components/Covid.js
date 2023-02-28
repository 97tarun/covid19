import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const result = await fetch("https://data.covid19india.org/data.json");
      //  console.log(result);
      const actualData = await result.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section className="bg-light mt-2">
     <center> <h1 className="m-auto text-primary fs-1 fw-bold ">COVID-19 LIVE TRACKER</h1></center>

          <ul>
            <div className="container">

              <div className="row">
                <div class="col-sm">
                  <li className="card mt-3 border border-primary border-2" style={{ width: "18rem" }}>
                    <div className="card-body  ">
                      <h5 className="card-title text-primary fs-5 fw-bold ">Total Active</h5>
                      <p className="card-text text-primary fs-5 fw-bold">{data.active}</p>
                    </div>
                  </li>
                </div>
                <div class="col-sm">
                  <li className="card mt-3 border border-primary border-2" style={{ width: "18rem" }}>
                    <div className="card-body  ">
                      <h5 className="card-title text-primary fs-5 fw-bold">Confirmed</h5>
                      <p className="card-text text-primary fs-5 fw-bold">{data.confirmed}</p>
                    </div>
                  </li>
                </div>
                <div class="col-sm">
                  <li className="card mt-3 border border-primary border-2" style={{ width: "18rem" }}>
                    <div className="card-body  ">
                      <h5 className="card-title text-danger fs-5 fw-bold">Total Deaths</h5>
                      <p className="card-text text-danger fs-5 fw-bold">{data.deaths}</p>
                    </div>
                  </li>
                </div>
              </div>
            </div> 
            <div className="container">
              <div className="row">
                <div class="col-sm">
                  <li className="card mt-3 border border-primary border-2" style={{ width: "18rem" }}>
                    <div className="card-body  ">
                      <h5 className="card-title text-primary fs-5 fw-bold">Daily Confirmed</h5>
                      <p className="card-text text-primary fs-5 fw-bold">{data.dailyconfirmed=" "?0:data.dailyconfirmed}</p>
                    </div>
                  </li>
                </div>
                <div class="col-sm">
                  <li className="card mt-3 border border-primary border-2" style={{ width: "18rem" }}>
                    <div className="card-body  ">
                      <h5 className="card-title text-primary fs-5 fw-bold">Daily Recovered</h5>
                      <p className="card-text text-primary fs-5 fw-bold">{data.dailyrecovered=" "?0:data.dailyrecovered}</p>
                    </div>
                  </li>
                </div>
                <div class="col-sm">
                  <li className="card mt-3 border border-primary border-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title text-success fs-5 fw-bold">Total Recovered</h5>
                      <p className="card-text text-success fs-5 fw-bold">{data.recovered}</p>
                    </div>
                  </li>
                </div>
                <div class="col-sm m-auto mb-1">
                  <li className="card mt-3 border border-primary border-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title text-primary fs-5 fw-bold">Last Update Time</h5>
                      <p className="card-text text-primary fs-5 fw-bold">{data.lastupdatedtime}</p>
                    </div>
                  </li>
                </div>
      
              </div>
            </div>
            
          </ul>
        
      </section>
    </>
  );
};

export default Covid;


