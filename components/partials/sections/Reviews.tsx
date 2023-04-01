import React from 'react'

const Reviews = () => {
  return (
    <>
        {/*<!-- Reviews-->*/}
        <section className="bg-secondary py-5 py-md-6 mt-4 mt-md-5">
            <div className="container-fluid py-3 py-md-0">
            <h2 className="mb-5 text-center">Trusted reviews</h2>
            <div className="tns-carousel-wrapper">
                <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;controls&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1, &quot;gutter&quot;: 16}, &quot;520&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 12}, &quot;860&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 23}, &quot;1080&quot;:{&quot;items&quot;:4, &quot;gutter&quot;: 23}, &quot;1380&quot;:{&quot;items&quot;:5, &quot;gutter&quot;: 23}, &quot;1600&quot;:{&quot;items&quot;:6, &quot;gutter&quot;: 23}}}">
                {/*<!-- Review Card-->*/}
                <div className="py-2">
                    <div className="card h-100 border-0 shadow mx-1">
                    <div className="card-body"><a className="d-flex align-items-center nav-heading mb-3" href="#"><img src="img/demo/shop-homepage/thumbnails/01.jpg" alt="Product thumb" width="60"/>
                        <div className="fs-md fw-medium ps-2 ms-1">Outdoor HD Cloud Security Camera</div></a>
                        <div className="mb-2 pb-1 star-rating mt-n1"><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star"></i>
                        </div>
                        <p className="fs-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <footer className="fs-sm px-4 pb-4">
                        <div className="d-flex align-items-center border-top mb-n2 pt-3"><img className="rounded-circle" src="img/testimonials/01.jpg" alt="Emma Brown" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">Emma Brown</div>
                        </div>
                    </footer>
                    </div>
                </div>
                {/*<!-- From Instagram-->*/}
                <div className="py-2"><a className="card h-100 border-0 shadow mx-1" href="#"><span className="card-floating-icon"><i className="ai-instagram"></i></span><img className="card-img-top" src="img/demo/shop-homepage/instagram/01.jpg" alt="Image"/>
                    <footer className="fs-sm mt-auto py-2 px-4">
                        <div className="d-flex align-items-center py-2"><img className="rounded-circle" src="img/testimonials/02.jpg" alt="@morni.janeffel" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">@morni.janeffel</div>
                        </div>
                    </footer></a></div>
                {/*<!-- Review Card-->*/}
                <div className="py-2">
                    <div className="card h-100 border-0 shadow mx-1">
                    <div className="card-body"><a className="d-flex align-items-center nav-heading mb-3" href="#"><img src="img/demo/shop-homepage/thumbnails/02.jpg" alt="Product thumb" width="60"/>
                        <div className="fs-md fw-medium ps-2 ms-1">Running Sneakers, Sports Collection</div></a>
                        <div className="mb-2 pb-1 star-rating mt-n1"><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i>
                        </div>
                        <p className="fs-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <footer className="fs-sm px-4 pb-4">
                        <div className="d-flex align-items-center border-top mb-n2 pt-3"><img className="rounded-circle" src="img/testimonials/06.jpg" alt="Edward Chew" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">Edward Chew</div>
                        </div>
                    </footer>
                    </div>
                </div>
                {/*<!-- From Instagram-->*/}
                <div className="py-2"><a className="card h-100 border-0 shadow mx-1" href="#"><span className="card-floating-icon"><i className="ai-instagram"></i></span><img className="card-img-top" src="img/demo/shop-homepage/instagram/02.jpg" alt="Image"/>
                    <footer className="fs-sm mt-auto py-2 px-4">
                        <div className="d-flex align-items-center py-2"><img className="rounded-circle" src="img/testimonials/09.jpg" alt="@jane.palson" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">@jane.palson</div>
                        </div>
                    </footer></a></div>
                {/*<!-- Review Card-->*/}
                <div className="py-2">
                    <div className="card h-100 border-0 shadow mx-1">
                    <div className="card-body"><a className="d-flex align-items-center nav-heading mb-3" href="#"><img src="img/demo/shop-homepage/thumbnails/06.jpg" alt="Product thumb" width="60" />
                        <div className="fs-md fw-medium ps-2 ms-1">Wireless Bluetooth Headset</div></a>
                        <div className="mb-2 pb-1 star-rating mt-n1"><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star"></i>
                        </div>
                        <p className="fs-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <footer className="fs-sm px-4 pb-4">
                        <div className="d-flex align-items-center border-top mb-n2 pt-3"><img className="rounded-circle" src="img/testimonials/03.jpg" alt="Tim Brooks" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">Tim Brooks</div>
                        </div>
                    </footer>
                    </div>
                </div>
                {/*<!-- From Instagram-->*/}
                <div className="py-2"><a className="card h-100 border-0 shadow mx-1" href="#"><span className="card-floating-icon"><i className="ai-instagram"></i></span><img className="card-img-top" src="img/demo/shop-homepage/instagram/03.jpg" alt="Image"/>
                    <footer className="fs-sm mt-auto py-2 px-4">
                        <div className="d-flex align-items-center py-2"><img className="rounded-circle" src="img/testimonials/05.jpg" alt="@sarah.cole" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">@sarah.cole</div>
                        </div>
                    </footer></a></div>
                {/*<!-- Review Card-->*/}
                <div className="py-2">
                    <div className="card h-100 border-0 shadow mx-1">
                    <div className="card-body"><a className="d-flex align-items-center nav-heading mb-3" href="#"><img src="img/demo/shop-homepage/thumbnails/04.jpg" alt="Product thumb" width="60"/>
                        <div className="fs-md fw-medium ps-2 ms-1">Block-colored Hooded Top</div></a>
                        <div className="mb-2 pb-1 star-rating mt-n1"><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star-filled active"></i><i className="sr-star ai-star"></i>
                        </div>
                        <p className="fs-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <footer className="fs-sm px-4 pb-4">
                        <div className="d-flex align-items-center border-top mb-n2 pt-3"><img className="rounded-circle" src="img/testimonials/04.jpg" alt="Michael Smith" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">Michael Smith</div>
                        </div>
                    </footer>
                    </div>
                </div>
                {/*<!-- From Instagram-->*/}
                <div className="py-2"><a className="card h-100 border-0 shadow mx-1" href="#"><span className="card-floating-icon"><i className="ai-instagram"></i></span><img className="card-img-top" src="img/demo/shop-homepage/instagram/04.jpg" alt="Image"/>
                    <footer className="fs-sm mt-auto py-2 px-4">
                        <div className="d-flex align-items-center py-2"><img className="rounded-circle" src="img/testimonials/02.jpg" alt="@morni.janeffel" width="42"/>
                        <div className="text-heading fw-medium ps-2 ms-1 mt-n1">@morni.janeffel</div>
                        </div>
                    </footer></a></div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export { Reviews };