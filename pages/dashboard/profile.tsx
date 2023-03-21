import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export default function profilePage({
    pageComponentProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
        
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