import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { BaseLayout, StepperComponent } from '@/components';

export default function orderPage({
    pageComponentProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <BaseLayout>
            <div style={{
                "top": "624px",
                "left": "317px",
                "width": "1000px",
                "height": "100vh",
                "margin": "100px auto",
                "borderRadius": "20px",
                //"background": "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                "background": "#FFFFFF 0% 0% no-repeat padding-box",
                "boxShadow": "0px 20px 40px #00000029",
                "opacity": "1",
                "display": "flex",
                "flexDirection": "column",
            }}>
                <StepperComponent/>
            </div>
        </BaseLayout>
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