import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { BaseLayout, PriceContainer } from '@/components';

export default function preciosPage({
  pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BaseLayout>
      <PriceContainer/>
    </BaseLayout>
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
