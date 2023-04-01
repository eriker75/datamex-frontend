import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
        {/*<!-- Footer-->*/}
        <footer className="footer bg-dark pt-5 pt-md-6">
            <div className="container pt-3 pb-0 pt-md-0 pb-md-3">
            <div className="row mb-4">
                <div className="col-md-4">
                <div className="widget widget-light pb-2 mb-4">
                    <h4 className="widget-title">Shop departments</h4>
                    <ul>
                    <li><a className="widget-link" href="#">Closing</a></li>
                    <li><a className="widget-link" href="#">Shoes</a></li>
                    <li><a className="widget-link" href="#">Electronics</a></li>
                    <li><a className="widget-link" href="#">Accessories</a></li>
                    <li><a className="widget-link" href="#">Software</a></li>
                    <li><a className="widget-link" href="#">Automotive</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-md-4">
                <div className="widget widget-light pb-2 mb-4">
                    <h4 className="widget-title">Customer zone</h4>
                    <ul>
                    <li><a className="widget-link" href="#">Your account</a></li>
                    <li><a className="widget-link" href="#">Shipping rates &amp; policies</a></li>
                    <li><a className="widget-link" href="#">Refunds &amp; replacements</a></li>
                    <li><a className="widget-link" href="#">Order tracking</a></li>
                    <li><a className="widget-link" href="#">Delivery info</a></li>
                    <li><a className="widget-link" href="#">Taxes &amp; fees</a></li>
                    <li><a className="widget-link" href="#">News</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-md-4">
                <div className="widget widget-light pb-3 mb-4" style={{"maxWidth":"24rem"}}>
                    <h3 className="widget-title">Stay informed</h3>
                    <form className="subscription-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                    <div className="input-group flex-nowrap"><i className="ai-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                        <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required/>
                        <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                    </div>
                    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                    <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                        <input className="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabIndex={-1}/>
                    </div>
                    <div className="form-text">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                    <div className="subscription-status"></div>
                    </form>
                </div>
                <div className="widget widget-light pt-1 mb-4">
                    <h4 className="widget-title">Download our app</h4>
                    <div className="d-flex flex-wrap pt-1"><a className="btn-market btn-outline btn-apple me-3 mb-3" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a><a className="btn-market btn-outline btn-google mb-3" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
                </div>
                </div>
            </div>
            </div>
            <div className="bg-darker pt-2">
            <div className="container py-sm-3">
                <div className="row pb-4 mb-2 pt-5 py-md-5">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex align-items-center"><i className="ai-truck text-primary" style={{"fontSize": "2.125rem"}}></i>
                    <div className="ps-3">
                        <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                        <p className="mb-0 fs-xs text-light opacity-50">Free delivery for all orders over $200</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex align-items-center"><i className="ai-refresh-cw text-primary" style={{"fontSize": "2.125rem"}}></i>
                    <div className="ps-3">
                        <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                        <p className="mb-0 fs-xs text-light opacity-50">We return money within 30 days</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex align-items-center"><i className="ai-life-buoy text-primary" style={{"fontSize": "2.125rem"}}></i>
                    <div className="ps-3">
                        <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                        <p className="mb-0 fs-xs text-light opacity-50">Friendly 24/7 customer support</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex align-items-center"><i className="ai-credit-card text-primary" style={{"fontSize": "2.125rem"}}></i>
                    <div className="ps-3">
                        <h6 className="fs-base text-light mb-1">Secure online payment</h6>
                        <p className="mb-0 fs-xs text-light opacity-50">We possess SSL / Secure сertificate</p>
                    </div>
                    </div>
                </div>
                </div>
                <hr className="hr-light my-0 mb-5"/>
                <div className="d-sm-flex align-items-center mb-4 pb-3">
                <div className="d-flex flex-wrap align-items-center me-3">
                    <a className="d-block me-grid-gutter mt-n1 mb-3" href="index.html" style={{"width": "108px"}}><Image src="/img/logo/logo-footer.png" alt="Around" width="100" height="200"/></a>
                    <ul className="list-inline fs-sm pt-2 mb-3">
                    <li className="list-inline-item"><a className="nav-link-style nav-link-light" href="#">About</a></li>
                    <li className="list-inline-item"><a className="nav-link-style nav-link-light" href="#">Outlets</a></li>
                    <li className="list-inline-item"><a className="nav-link-style nav-link-light" href="#">Affiliates</a></li>
                    <li className="list-inline-item"><a className="nav-link-style nav-link-light" href="#">Support</a></li>
                    <li className="list-inline-item"><a className="nav-link-style nav-link-light" href="#">Terms of use</a></li>
                    </ul>
                </div>
                <div className="d-flex pt-2 pt-sm-0 ms-auto"><a className="btn-social bs-twitter bs-light me-2 mb-2" href="#"><i className="ai-twitter"></i></a><a className="btn-social bs-facebook bs-light me-2 mb-2" href="#"><i className="ai-facebook"></i></a><a className="btn-social bs-instagram bs-light me-2 mb-2" href="#"><i className="ai-instagram"></i></a><a className="btn-social bs-pinterest bs-light me-2 mb-2" href="#"><i className="ai-pinterest"></i></a><a className="btn-social bs-youtube bs-light mb-2" href="#"><i className="ai-youtube"></i></a></div>
                </div>
                <div className="d-sm-flex justify-content-between align-items-center pb-4 pb-sm-2">
                <div className="order-sm-2 mb-4 mb-sm-3"><Image src="/img/footer/cards.png" alt="Payment methods" width="181" height="181"/></div>
                <div className="order-sm-1 mb-3">
                    <p className="fs-ms mb-0"><span className="text-light opacity-50 me-1">© All rights reserved. Made by</span><a className="nav-link-style nav-link-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></p>
                </div>
                </div>
            </div>
        </div>
        </footer>
    </>
  )
}

export { Footer };