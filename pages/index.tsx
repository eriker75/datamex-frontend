import Head from 'next/head';
import { 
  Footer, 
  Navigation,
  FrequentQuestions,
  Statistics,
  Reviews,
  SignInModal
} from '@/components/partials';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInModal/>
      <Navigation/>
      <Statistics/>
      <FrequentQuestions/>
      <Reviews/>
      <Footer/>
    </>
  )
}