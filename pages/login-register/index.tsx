import { Navigation } from '@/components/partials';
import SignInForm from '@/components/partials/SignInForm';
import SignUpForm from '@/components/partials/SignUp';
import BackgroundLogin from '@/components/uxux/backgrounds/BackgroundLogin';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export default function LoginRegisterPage({
    pageComponentProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
        <Navigation/>
        <BackgroundLogin/>
        {/*<!-- Actual content-->*/}
        <section className="container d-flex align-items-center pt-7 pb-3 pb-md-4" style={{"flex": "1 0 auto"}}>
            <div className="w-100 pt-3">
            <div className="row"></div>
                <div className="col-lg-4 col-md-6 offset-lg-1">
                <SignInForm/>
                <SignUpForm/>
                </div>
            </div>
        </section>   
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const pageComponentProps = {};
    return {
        props: {
            pageComponentProps
        }
    }
}