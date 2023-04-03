/**
 *  React Imports 
 */
import { useEffect } from 'react';
/**
 * Nextjs Imports
 */
import type { AppProps } from 'next/app';
/**
 * Theme Imports
 */
import '@/styles/globals.scss';
import 'tiny-slider/dist/tiny-slider.css';
import 'simplebar/dist/simplebar.css';
/**
 * Redux imports
 */
import { ReduxProvider } from '@/redux/provider';
/**
 * Stripe setup
 */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PK}`)

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    if(window !== undefined){
      window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
      require("js/theme.js");
    }
  }, []);

  return (
    <ReduxProvider>
      <Elements stripe={stripe}>
        <Component {...pageProps} />
      </Elements>
    </ReduxProvider>
  )
}
