import Head from 'next/head';
import styles from '../styles/Home.module.css';

import HubspotForm from 'react-hubspot-form';
import Dailymotion from 'react-dailymotion';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Next performance test</h1>

      <Dailymotion
        video="x7x2ixf"
        uiTheme="dark"
        autoplay
      />

      <HubspotForm
        portalId='6331207'
        formId='2f9f2a9b-067e-405d-ad73-fd776451179e'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}
      />
    </div>
  )
}
