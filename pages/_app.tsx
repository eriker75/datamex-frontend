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


export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    if(window !== undefined){
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      require("js/theme.js");
    }
  }, []);

  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}
