import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { BaseLayout } from '@/components';

export default function orderPage({
    pageComponentProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <BaseLayout>
            <div style={{
                "top": "624px",
                "left": "317px",
                "width": "800px",
                "height": "50vh",
                "margin": "100px auto",
                "borderRadius": "20px !important",
                //"background": "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                "background": "#FFFFFF 0% 0% no-repeat padding-box",
                "boxShadow": "0px 20px 40px #00000029",
                "opacity": "1",
            }}>
                
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