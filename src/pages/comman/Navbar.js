import React, { useEffect } from "react";
function Navbar() {
  return (
    <React.Fragment>
      {/* <!-- Navbar --> */}
      <nav
        class="navbar navbar-main navbar-expand-lg position-sticky mt-2 top-1 px-0 me-4 shadow-none border-radius-xl z-index-sticky"
        id="navbarBlur"
        data-scroll="true"
      >
        <div class="container-fluid py-1 px-3">
          <div
            class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div class="md-auto pe-md-3 justify-content-start">
              <div class="d-flex">
                <div class="dropdown d-inline">
                  <li class="nav-item d-flex align-items-center">
                    <div class="sidenav-toggler sidenav-toggler-inner d-xl-block d-none">
                      <a
                        href="javascript:;"
                        class="nav-link text-body p-0 mt-2"
                      >
                        <div class="sidenav-toggler-inner">
                          <i class="fas fa-chevron-circle-left rotate"></i>
                        </div>
                      </a>
                    </div>
                  </li>
                </div>
                <div class="dropdown d-inline" data-cat="date-range">
                  <a
                    href="javascript:;"
                    class="btn bg-gradient-primary dropdown-toggle text-doyle"
                    data-bs-toggle="dropdown"
                    id="navbarDropdownMenuLink2"
                    aria-expanded="false"
                  >
                    Time Range
                  </a>
                  <div>
                    <ul
                      class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
                      aria-labelledby="navbarDropdownMenuLink2"
                    >
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="Last 30 days"
                          data-filter-type="date-range"
                        >
                          Last 30 days
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="Last 60 days"
                          data-filter-type="date-range"
                        >
                          Last 60 days
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="Last 90 days"
                          data-filter-type="date-range"
                        >
                          Last 90 days
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="Last 180 days"
                          data-filter-type="date-range"
                        >
                          Last 180 days
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="custom"
                          data-filter-type="date-range"
                          id="daterangepicker"
                        >
                          Date Range
                        </a>
                      </li>
                      <li>
                        <hr class="horizontal my-2 light" />
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md text-danger"
                          href="javascript:;"
                          data-remove-filter="remove-filter"
                        >
                          Remove Filter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="filter-active d-none">
                    <a href="javascript:;" class="btn bg-gradient-light">
                      <span class="filter-value"></span>
                      <i class="fas fa-times"></i>
                    </a>
                  </div>
                </div>

                {/* <!-- region --> */}

                <div class="dropdown d-inline" data-cat="region">
                  <a
                    href="javascript:;"
                    class="btn bg-gradient-primary dropdown-toggle text-doyle"
                    data-bs-toggle="dropdown"
                    id="navbarDropdownMenuLink2"
                    aria-expanded="false"
                    // onClick="myFunction()"
                  >
                    Region
                  </a>
                  <div id="myDropdown">
                    <ul
                      class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
                      aria-labelledby="navbarDropdownMenuLink2"
                      style={{ border: "1px solid #2c2b59" }}
                    >
                      <input
                        type="text"
                        placeholder="Select state or region"
                        id="myInput"
                        onKeyUp="filterFunction()"
                        style={{
                          backgroundColor: "#202634",
                          border: "1px solid #2a2d50",
                          color: "#fff",
                          width: "100%",
                        }}
                      />
                      <li>
                        <a
                          class="dropdown-item border-radius-md region-region"
                          href="javascript:;"
                          data-filter-value-region="WEST"
                          data-filter-type="regions"
                          id="west"
                        >
                          West
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md region-region"
                          href="javascript:;"
                          data-filter-value-region="MIDWEST"
                          data-filter-type="regions"
                          id="midwest"
                        >
                          Mid West
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md region-region"
                          href="javascript:;"
                          data-filter-value-region="SOUTH"
                          data-filter-type="regions"
                          id="south"
                        >
                          South
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md region-region"
                          href="javascript:;"
                          data-filter-value-region="NORTHEAST"
                          data-filter-type="regions"
                          id="northeast"
                        >
                          North East
                        </a>
                      </li>
                      <hr style={{ border: "2px solid grey" }} />
                      <ul
                        id="states"
                        style={{
                          maxHeight: "220px",
                          width: "300px",
                          overflowY: "scroll",
                          paddingLeft: 0,
                          marginLeft: 0,
                          fontSize: "1em",
                        }}
                      >
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="AL"
                            class="region_options"
                            id="select-option-AL"
                          />
                          <label for="select-option-AL" class="state-option">
                            Alabama
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="AK"
                            class="region_options"
                            id="select-option-AK"
                          />
                          <label for="select-option-AK" class="state-option">
                            Alaska
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="AZ"
                            class="region_options"
                            id="select-option-AZ"
                          />
                          <label for="select-option-AZ" class="state-option">
                            Arizona
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="AR"
                            class="region_options"
                            id="select-option-AR"
                          />
                          <label for="select-option-AR" class="state-option">
                            Arkansas
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="CA"
                            class="region_options"
                            id="select-option-CA"
                          />
                          <label for="select-option-CA" class="state-option">
                            California
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="CO"
                            class="region_options"
                            id="select-option-CO"
                          />
                          <label for="select-option-CO" class="state-option">
                            Colorado
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="CT"
                            class="region_options"
                            id="select-option-CT"
                          />
                          <label for="select-option-CT" class="state-option">
                            Connecticut
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="DE"
                            class="region_options"
                            id="select-option-DE"
                          />
                          <label for="select-option-DE" class="state-option">
                            Delaware
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="FL"
                            class="region_options"
                            id="select-option-FL"
                          />
                          <label for="select-option-FL" class="state-option">
                            Florida
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="GA"
                            class="region_options"
                            id="select-option-GA"
                          />
                          <label for="select-option-GA" class="state-option">
                            Georgia
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="HI"
                            class="region_options"
                            id="select-option-HI"
                          />
                          <label for="select-option-HI" class="state-option">
                            Hawaii
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="ID"
                            class="region_options"
                            id="select-option-ID"
                          />
                          <label for="select-option-ID" class="state-option">
                            Idaho
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="IL"
                            class="region_options"
                            id="select-option-IL"
                          />
                          <label for="select-option-IL" class="state-option">
                            Illinois
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="IN"
                            class="region_options"
                            id="select-option-IN"
                          />
                          <label for="select-option-IN" class="state-option">
                            Indiana
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="IA"
                            class="region_options"
                            id="select-option-IA"
                          />
                          <label for="select-option-IA" class="state-option">
                            Iowa
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="KS"
                            class="region_options"
                            id="select-option-KS"
                          />
                          <label for="select-option-KS" class="state-option">
                            Kansas
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="KY"
                            class="region_options"
                            id="select-option-KY"
                          />
                          <label for="select-option-KY" class="state-option">
                            Kentucky
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="LA"
                            class="region_options"
                            id="select-option-LA"
                          />
                          <label for="select-option-LA" class="state-option">
                            Louisiana
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="ME"
                            class="region_options"
                            id="select-option-ME"
                          />
                          <label for="select-option-ME" class="state-option">
                            Maine
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="MD"
                            class="region_options"
                            id="select-option-MD"
                          />
                          <label for="select-option-MD" class="state-option">
                            Maryland
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="MA"
                            class="region_options"
                            id="select-option-MA"
                          />
                          <label for="select-option-MA" class="state-option">
                            Massachusetts
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="MI"
                            class="region_options"
                            id="select-option-MI"
                          />
                          <label for="select-option-MI" class="state-option">
                            Michigan
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="MN"
                            class="region_options"
                            id="select-option-MN"
                          />
                          <label for="select-option-MN" class="state-option">
                            Minnesota
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="MS"
                            class="region_options"
                            id="select-option-MS"
                          />
                          <label for="select-option-MS" class="state-option">
                            Mississippi
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="MO"
                            class="region_options"
                            id="select-option-MO"
                          />
                          <label for="select-option-MO" class="state-option">
                            Missouri
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="MT"
                            class="region_options"
                            id="select-option-MT"
                          />
                          <label for="select-option-MT" class="state-option">
                            Montana
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="NE"
                            class="region_options"
                            id="select-option-NE"
                          />
                          <label for="select-option-NE" class="state-option">
                            Nebraska
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="NV"
                            class="region_options"
                            id="select-option-NV"
                          />
                          <label for="select-option-NV" class="state-option">
                            Nevada
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="NH"
                            class="region_options"
                            id="select-option-NH"
                          />
                          <label for="select-option-NH" class="state-option">
                            New Hampshire
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="NJ"
                            class="region_options"
                            id="select-option-NJ"
                          />
                          <label for="select-option-NJ" class="state-option">
                            New Jersey
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="NM"
                            class="region_options"
                            id="select-option-NM"
                          />
                          <label for="select-option-NM" class="state-option">
                            New Mexico
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="NY"
                            class="region_options"
                            id="select-option-NY"
                          />
                          <label for="select-option-NY" class="state-option">
                            New York
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="ND"
                            class="region_options"
                            id="select-option-ND"
                          />
                          <label for="select-option-ND" class="state-option">
                            North Dakota
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="OH"
                            class="region_options"
                            id="select-option-OH"
                          />
                          <label for="select-option-OH" class="state-option">
                            Ohio
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="OK"
                            class="region_options"
                            id="select-option-OK"
                          />
                          <label for="select-option-OK" class="state-option">
                            Oklahoma
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="OR"
                            class="region_options"
                            id="select-option-OR"
                          />
                          <label for="select-option-OR" class="state-option">
                            Oregon
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="PA"
                            class="region_options"
                            id="select-option-PA"
                          />
                          <label for="select-option-PA" class="state-option">
                            Pennsylvania
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="RI"
                            class="region_options"
                            id="select-option-RI"
                          />
                          <label for="select-option-RI" class="state-option">
                            Rhode Island
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="SC"
                            class="region_options"
                            id="select-option-SC"
                          />
                          <label for="select-option-SC" class="state-option">
                            South Carolina
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="SD"
                            class="region_options"
                            id="select-option-SD"
                          />
                          <label for="select-option-SD" class="state-option">
                            South Dakota
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="TN"
                            class="region_options"
                            id="select-option-TN"
                          />
                          <label for="select-option-TN" class="state-option">
                            Tennessee
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="TX"
                            class="region_options"
                            id="select-option-TX"
                          />
                          <label for="select-option-TX" class="state-option">
                            Texas
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="UT"
                            class="region_options"
                            id="select-option-UT"
                          />
                          <label for="select-option-UT" class="state-option">
                            Utah
                          </label>
                        </li>
                        <li data-ragion="NORTHEAST" class="state-list">
                          <input
                            type="checkbox"
                            value="VT"
                            class="region_options"
                            id="select-option-VT"
                          />
                          <label for="select-option-VT" class="state-option">
                            Vermont
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="VA"
                            class="region_options"
                            id="select-option-VA"
                          />
                          <label for="select-option-VA" class="state-option">
                            Virginia
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="WA"
                            class="region_options"
                            id="select-option-WA"
                          />
                          <label for="select-option-WA" class="state-option">
                            Washington
                          </label>
                        </li>
                        <li data-ragion="SOUTH" class="state-list">
                          <input
                            type="checkbox"
                            value="WV"
                            class="region_options"
                            id="select-option-WV"
                          />
                          <label for="select-option-WV" class="state-option">
                            West Virginia
                          </label>
                        </li>
                        <li data-ragion="MIDWEST" class="state-list">
                          <input
                            type="checkbox"
                            value="WI"
                            class="region_options"
                            id="select-option-WI"
                          />
                          <label for="select-option-WI" class="state-option">
                            Wisconsin
                          </label>
                        </li>
                        <li data-ragion="WEST" class="state-list">
                          <input
                            type="checkbox"
                            value="WY"
                            class="region_options"
                            id="select-option-WY"
                          />
                          <label for="select-option-WY" class="state-option">
                            Wyoming
                          </label>
                        </li>
                      </ul>

                      <br />
                      <li
                        class="d-flex"
                        style={{ justifyContent: "space around" }}
                      >
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-remove-multi-filter="remove-filter"
                        >
                          CLEAR ALL
                        </a>

                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-remove-filter="remove-filter"
                          style={{
                            backgroundColor: "#40ddb9",
                            color: "#000",
                            textAlign: "center",
                          }}
                          id="apply-filter"
                        >
                          Apply
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="filter-active d-none" style={{ display: "none" }}>
                    <a
                      href="javascript:;"
                      class="btn bg-gradient-primary text-doyle"
                    >
                      <span class="filter-value"></span>
                      <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="filter-activee d-none">
                    <a href="javascript:;" class="btn bg-gradient-light">
                      <span class="filter-value"></span>
                      <i class="fas fa-times"></i>
                    </a>
                  </div>
                </div>

                {/* <!-- region --> */}

                <div class="dropdown d-inline" data-cat="segment">
                  <a
                    href="javascript:;"
                    class="btn bg-gradient-primary dropdown-toggle text-doyle"
                    data-bs-toggle="dropdown"
                    id="navbarDropdownMenuLink2"
                    aria-expanded="false"
                  >
                    Segment
                  </a>
                  <div>
                    <ul
                      class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
                      aria-labelledby="navbarDropdownMenuLink2"
                    >
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="Bio-naive"
                          data-filter-type="segment"
                        >
                          Bio-naive patients
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="Bio-experienced"
                          data-filter-type="segment"
                        >
                          Bio-experienced patients
                        </a>
                      </li>
                      <li>
                        <hr class="horizontal my-2 light" />
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md text-danger"
                          href="javascript:;"
                          data-remove-filter="remove-filter"
                        >
                          Remove Filter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="filter-active d-none">
                    <a href="javascript:;" class="btn bg-gradient-light">
                      <span class="filter-value"></span>
                      Patients
                      <i class="fas fa-times"></i>
                    </a>
                  </div>
                </div>
                <div class="dropdown d-inline" data-cat="condition">
                  <a
                    href="javascript:;"
                    class="btn bg-gradient-primary dropdown-toggle text-doyle"
                    data-bs-toggle="dropdown"
                    id="navbarDropdownMenuLink2"
                    aria-expanded="false"
                  >
                    Condition
                  </a>
                  <div>
                    <ul
                      class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
                      aria-labelledby="navbarDropdownMenuLink2"
                    >
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="PSO"
                          data-filter-type="condition"
                        >
                          PSO
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="PSA"
                          data-filter-type="condition"
                        >
                          PSA
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md"
                          href="javascript:;"
                          data-filter-value="GI"
                          data-filter-type="condition"
                        >
                          GI
                        </a>
                      </li>
                      <li>
                        <hr class="horizontal my-2 light" />
                      </li>
                      <li>
                        <a
                          class="dropdown-item border-radius-md text-danger"
                          href="javascript:;"
                        >
                          Remove Filter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="filter-active d-none">
                    <a href="javascript:;" class="btn bg-gradient-light">
                      <span class="filter-value"></span>
                      <i class="fas fa-times"></i>
                    </a>
                  </div>
                </div>
                <div class="dropdown d-inline d-none hideall">
                  <a
                    href=" javascript:;"
                    class="btn text-pink-50"
                    data-bs-toggle="dropdown"
                    id="navbarDropdownMenuLink2"
                    aria-expanded="false"
                  >
                    Remove Filters
                  </a>
                </div>
              </div>
            </div>
            <ul class="navbar-nav ms-auto justify-content-end">
              <li class="nav-item d-flex align-items-center">
                <div class="form-check form-switch ps-0 d-xl-block d-none">
                  <input
                    class="form-check-input ms-3"
                    type="checkbox"
                    id="dark-version"
                    checked="true"
                    onClick="darkMode(this)"
                  />
                </div>
                <span class="d-sm-inline ms-2 d-none">Light/Dark</span>
              </li>
              <li class="nav-item ms-3 d-flex align-items-center">
                <a
                  href="../../pages/authentication/signin/illustration.html"
                  class="nav-link text-white font-weight-bold px-0"
                >
                  <i class="fa fa-user me-1"></i>
                  <span class="d-sm-inline d-none">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
    </React.Fragment>
  );
}

export default Navbar;
