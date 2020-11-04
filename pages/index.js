import Head from 'next/head';
import styles from '../styles/Home.module.css';

import HubspotForm from 'react-hubspot-form';
import Dailymotion from 'react-dailymotion';
import TagManager from 'react-gtm-module';

export default function Home() {

  const tagManagerArgs = {
    gtmId: 'GTM-000000'
  }

  TagManager.initialize(tagManagerArgs)
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
