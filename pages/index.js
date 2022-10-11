import styles from '../styles/Home.module.scss'
import React from 'react'
import Head from 'next/head'

import LatestPost from '../components/LatestPost'
import TopPosts from '../components/TopPosts'

import { SERVER_URI, API_VERSION, API_KEY } from '../config/env'
import Blowgrr from '../config/Blowgrr'

export const blowgrr = new Blowgrr(SERVER_URI, API_VERSION, API_KEY)

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta name="description" content="articles about science, tech, and all sweat candies" />
        <title>Blowgrr - the knowledge library</title>
      </Head>

      <div className={styles.container}>
        <LatestPost post={ posts[0] } />
        <TopPosts posts={[posts[1], posts[2], posts[3]]} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  let posts;
  let isError = false;

  try {
    const data = await blowgrr.getPosts()

    if(!data.errors){
      posts = data.posts
    }

  } catch (error) {
    isError = true;
  }

  if(isError){
    return {
      redirect: {
          destination: '/503',
          permanent: false,
      }
    }
  }

  if(posts.length == 0){
    return {
        redirect: {
            destination: '/404',
            permanent: false,
        }
    }
  }

  return { 
    props: { posts } 
  }
}
