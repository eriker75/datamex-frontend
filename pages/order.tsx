import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { BaseLayout } from '@/components';

export default function orderPage({
    pageComponentProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <BaseLayout>
            ORDEN
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