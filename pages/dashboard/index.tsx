/* eslint-disable @next/next/no-img-element */
import { DashboardLayout } from "@/components";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";

export default function DashboardPage({
  pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <DashboardLayout>
        {/*<!-- Title + Filters-->*/}
        <div className="d-sm-flex align-items-center justify-content-between pb-2">
          <h1 className="h3 mb-3 text-center text-sm-start">Orders history</h1>
          <div className="d-flex align-items-center mb-3">
            <label className="form-label text-nowrap pe-1 me-2 mb-0">
              Sort orders
            </label>
            <select className="form-select form-select-sm">
              <option>All</option>
              <option>In progress</option>
              <option>Delivered</option>
              <option>Canceled</option>
            </select>
          </div>
        </div>
        {/*<!-- Accordion with orders-->*/}
        <div className="accordion" id="orders-accordion">
          {/*<!-- Order-->*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="order-header-1">
              <button
                className="accordion-button no-indicator d-flex flex-wrap align-items-center justify-content-between pe-4"
                data-bs-toggle="collapse"
                data-bs-target="#order-collapse-1"
                aria-expanded="true"
                aria-controls="order-collapse-1"
              >
                <div className="fs-sm fw-medium text-nowrap my-1 me-2">
                  <i className="ai-hash fs-base me-1"></i>
                  <span className="d-inline-block align-middle">
                    34VB5540K83
                  </span>
                </div>
                <div className="text-nowrap text-body fs-sm fw-normal my-1 me-2">
                  <i className="ai-clock text-muted me-1"></i>Aug 04, 2020
                </div>
                <div className="bg-faded-info text-info fs-xs fw-medium py-1 px-3 rounded-1 my-1 me-2">
                  In progress
                </div>
                <div className="text-body fs-sm fw-medium my-1">$187.65</div>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse show"
              id="order-collapse-1"
              aria-labelledby="order-header-1"
              data-bs-parent="#orders-accordion"
            >
              <div className="accordion-body pt-4 bg-secondary rounded-top-0 rounded-3">
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/01.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Mom High Waist Shorts</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Size:</span>XS
                      </div>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        Blue
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$49.50</div>
                  </div>
                </div>
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/02.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Cotton T-shirt with Print</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Size:</span>XS
                      </div>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        Black / Printed
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$17.99</div>
                  </div>
                </div>
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/03.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Floral Printed Sneakers</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Size:</span>
                        8.5
                      </div>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        Floral print
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$86.00</div>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top">
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Subtotal:</span>
                    <span className="fw-medium">$153.49</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Shipping:</span>
                    <span className="fw-medium">$27.31</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Tax:</span>
                    <span className="fw-medium">$6.85</span>
                  </div>
                  <div className="fs-sm my-2">
                    <span className="text-muted me-1">Total:</span>
                    <span className="fw-medium">$187.65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Order-->*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="order-header-2">
              <button
                className="accordion-button collapsed accordion-button no-indicator d-flex flex-wrap align-items-center justify-content-between pe-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#order-collapse-2"
                aria-expanded="false"
                aria-controls="order-collapse-2"
              >
                <div className="fs-sm fw-medium text-nowrap my-1 me-2">
                  <i className="ai-hash fs-base me-1"></i>
                  <span className="d-inline-block align-middle">
                    47H76G09F33
                  </span>
                </div>
                <div className="text-nowrap text-body fs-sm fw-normal my-1 me-2">
                  <i className="ai-clock text-muted me-1"></i>Jul 30, 2020
                </div>
                <div className="bg-faded-info text-info fs-xs fw-medium py-1 px-3 rounded-1 my-1 me-2">
                  In progress
                </div>
                <div className="text-body fs-sm fw-medium my-1">$789.34</div>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse"
              id="order-collapse-2"
              aria-labelledby="order-header-2"
              data-bs-parent="#orders-accordion"
            >
              <div className="accordion-body pt-4 bg-secondary rounded-top-0 rounded-3">
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/04.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Smart Watch Series 5</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Screen:</span>
                        42
                      </div>
                      <div>
                        <span className="text-muted me-1">Band color:</span>
                        White
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$49.50</div>
                  </div>
                </div>
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/05.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Sport Running Sneakers</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Size:</span>
                        10.5
                      </div>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        White / Orange
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$145.00</div>
                  </div>
                </div>
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/06.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Wireless Bluetooth Headset</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Brand:</span>
                        Beats
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$258.00</div>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top">
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Subtotal:</span>
                    <span className="fw-medium">$776.99</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Shipping:</span>
                    <span className="fw-medium">$12.35</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Tax:</span>
                    <span className="fw-medium">&mdash;</span>
                  </div>
                  <div className="fs-sm my-2">
                    <span className="text-muted me-1">Total:</span>
                    <span className="fw-medium">$789.34</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Order-->*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="order-header-3">
              <button
                className="accordion-button collapsed accordion-button no-indicator d-flex flex-wrap align-items-center justify-content-between pe-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#order-collapse-3"
                aria-expanded="false"
                aria-controls="order-collapse-3"
              >
                <div className="fs-sm fw-medium text-nowrap my-1 me-2">
                  <i className="ai-hash fs-base me-1"></i>
                  <span className="d-inline-block align-middle">
                    78A6431D409
                  </span>
                </div>
                <div className="text-nowrap text-body fs-sm fw-normal my-1 me-2">
                  <i className="ai-clock text-muted me-1"></i>Jul 16, 2020
                </div>
                <div className="bg-faded-danger text-danger fs-xs fw-medium py-1 px-3 rounded-1 my-1 me-2">
                  Canceled
                </div>
                <div className="text-body fs-sm fw-medium my-1">$215.40</div>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse"
              id="order-collapse-3"
              aria-labelledby="order-header-3"
              data-bs-parent="#orders-accordion"
            >
              <div className="accordion-body pt-4 bg-secondary rounded-top-0 rounded-3">
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/07.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">360 Degrees Camera</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Category:</span>
                        Electronics
                      </div>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        White
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$110.00</div>
                  </div>
                </div>
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/08.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Vintage Travel Backpack</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        Green / Brown
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$81.45</div>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top">
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Subtotal:</span>
                    <span className="fw-medium">$191.45</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Shipping:</span>
                    <span className="fw-medium">$15.20</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Tax:</span>
                    <span className="fw-medium">$8.75</span>
                  </div>
                  <div className="fs-sm my-2">
                    <span className="text-muted me-1">Total:</span>
                    <span className="fw-medium">$215.40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Order-->*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="order-header-4">
              <button
                className="accordion-button collapsed accordion-button no-indicator d-flex flex-wrap align-items-center justify-content-between pe-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#order-collapse-4"
                aria-expanded="false"
                aria-controls="order-collapse-4"
              >
                <div className="fs-sm fw-medium text-nowrap my-1 me-2">
                  <i className="ai-hash fs-base me-1"></i>
                  <span className="d-inline-block align-middle">
                    112P45A90V2
                  </span>
                </div>
                <div className="text-nowrap text-body fs-sm fw-normal my-1 me-2">
                  <i className="ai-clock text-muted me-1"></i>May 28, 2020
                </div>
                <div className="bg-faded-success text-success fs-xs fw-medium py-1 px-3 rounded-1 my-1 me-2">
                  Delivered
                </div>
                <div className="text-body fs-sm fw-medium my-1">$94.75</div>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse"
              id="order-collapse-4"
              aria-labelledby="order-header-4"
              data-bs-parent="#orders-accordion"
            >
              <div className="accordion-body pt-4 bg-secondary rounded-top-0 rounded-3">
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/09.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Sport Running Sneakers</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Size:</span>11
                      </div>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        Gray
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$82.00</div>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top">
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Subtotal:</span>
                    <span className="fw-medium">$82.00</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Shipping:</span>
                    <span className="fw-medium">$9.00</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Tax:</span>
                    <span className="fw-medium">$3.75</span>
                  </div>
                  <div className="fs-sm my-2">
                    <span className="text-muted me-1">Total:</span>
                    <span className="fw-medium">$94.75</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Order-->*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="order-header-5">
              <button
                className="accordion-button collapsed accordion-button no-indicator d-flex flex-wrap align-items-center justify-content-between pe-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#order-collapse-5"
                aria-expanded="false"
                aria-controls="order-collapse-5"
              >
                <div className="fs-sm fw-medium text-nowrap my-1 me-2">
                  <i className="ai-hash fs-base me-1"></i>
                  <span className="d-inline-block align-middle">
                    502TR872W2
                  </span>
                </div>
                <div className="text-nowrap text-body fs-sm fw-normal my-1 me-2">
                  <i className="ai-clock text-muted me-1"></i>Apr 05, 2020
                </div>
                <div className="bg-faded-success text-success fs-xs fw-medium py-1 px-3 rounded-1 my-1 me-2">
                  Delivered
                </div>
                <div className="text-body fs-sm fw-medium my-1">$128.00</div>
              </button>
            </h2>
            <div
              className="accordion-collapse collapse"
              id="order-collapse-5"
              aria-labelledby="order-header-5"
              data-bs-parent="#orders-accordion"
            >
              <div className="accordion-body pt-4 bg-secondary rounded-top-0 rounded-3">
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/10.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Military Cotton Cap</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Category:</span>
                        Accessories
                      </div>
                      <div>
                        <span className="text-muted me-1">Color:</span>
                        Military
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$16.00</div>
                  </div>
                </div>
                {/*<!-- Item-->*/}
                <div className="d-sm-flex justify-content-between mb-3 pb-1">
                  <div className="order-item d-block d-sm-flex me-sm-3">
                    <a
                      className="d-table mx-sm-0 mx-auto flex-shrink-0"
                      href="#"
                    >
                      <img
                        className="d-block rounded"
                        src="img/dashboard/orders/11.jpg"
                        alt="Thumbnail"
                        width="105"
                      />
                    </a>
                    <div className="fs-sm pt-2 ps-sm-3 text-center text-sm-start">
                      <h5 className="nav-heading fs-sm mb-2">
                        <a href="#">Women Colorblock Sneakers</a>
                      </h5>
                      <div>
                        <span className="text-muted me-1">Size:</span>
                        8.5
                      </div>
                    </div>
                  </div>
                  <div className="fs-sm text-center pt-2 me-sm-3">
                    <div className="text-muted">Quantity:</div>
                    <div className="fw-medium">1</div>
                  </div>
                  <div className="fs-sm text-center pt-2">
                    <div className="text-muted">Subtotal:</div>
                    <div className="fw-medium">$102.00</div>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top">
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Subtotal:</span>
                    <span className="fw-medium">$118.00</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Shipping:</span>
                    <span className="fw-medium">$7.50</span>
                  </div>
                  <div className="fs-sm my-2 me-2">
                    <span className="text-muted me-1">Tax:</span>
                    <span className="fw-medium">$2.50</span>
                  </div>
                  <div className="fs-sm my-2">
                    <span className="text-muted me-1">Total:</span>
                    <span className="fw-medium">$128.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Pagination-->*/}
        <nav className="d-md-flex justify-content-between align-items-center text-center text-md-start pt-grid-gutter">
          <div className="d-md-flex align-items-center w-100">
            <span className="fs-sm text-muted me-md-3">
              Showing 5 of 13 orders
            </span>
            <div
              className="progress w-100 my-3 mx-auto mx-md-0"
              style={{ maxWidth: "10rem", height: "4px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "38%" }}
                aria-valuenow={38}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <button className="btn btn-outline-primary btn-sm" type="button">
            Load more orders
          </button>
        </nav>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const pageComponentProps = {};

  return {
    props: {
      pageComponentProps,
    },
  };
}
