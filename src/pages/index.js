import Head from "next/head";
import { useState, useEffect } from "react";
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Blessing from "@components/Blessing";
import Bless from "@components/Bless";

import styles from "@styles/Home.module.scss";

import { useComposeDB } from "../hooks/useComposeDB";

const DESCRIPTION =
  "Bless club is the app where prophets go to share their blessings.";


import Home, { homeLoader } from '../routes/home'
import NewSpace, { newSpaceLoader } from '../routes/newSpace'
import Space, { spaceLoader } from '../routes/space'


export default function Main() {
  const { compose, isAuthenticated } = useComposeDB();

  const [router, setRouter] = useState(null);
  async function loadRouter() {
    setRouter(createHashRouter([
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/new-space',
        element: <NewSpace />,
        loader: newSpaceLoader,
      },
      {
        path: '/space/:spaceId',
        element: <Space />,
        loader: spaceLoader,
      },
    ]))
  }


  useEffect(() => {
    loadRouter()
  }, [])


  return (
    <Layout>
      <Head>
        <title>Stigmergic Organization</title>
        <meta name='description' content={DESCRIPTION} />
        <link rel='icon' href='/favicon.ico' />
        <meta property="og:title" content="Stigmergic Organization" />
        <meta property="og:url" content="https://stigmergic.org" />
        <meta
          property="og:image"
          content="/logo.png"
        />
      </Head>
      { router ? <RouterProvider router={router} /> : '' }
    </Layout>
  );
}

