import { BaseLayout } from "@/components";
import Image from 'next/image'

// pages/404.tsx
export default function Custom404() {
    return (
        <BaseLayout>
            <div className="container d-flex flex-column justify-content-center pt-5 mt-n6" style={{"flex": "1 0 auto"}}>
                <div className="pt-7 pb-5">
                <div className="text-center mb-2 pb-4">
                    <h1 className="mb-5"><Image className="d-inline-block" src="/img/pages/404/404-text.svg" alt="Error 404" width={453} height={168}/><span className="visually-hidden">Error 404</span></h1>
                    <h2>Page not found!</h2>
                    <p className="pb-2">It seems we can’t find the page you are looking for.</p><a className="btn btn-translucent-primary me-3" href="index.html">Go to homepage</a><span>Or try</span>
                </div>
                <div className="input-group mx-auto" style={{"maxWidth": "390px"}}><i className="ai-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                    <input className="form-control rounded" type="text" placeholder="Search" required/>
                </div>
                </div>
            </div>
        </BaseLayout>
    )
}