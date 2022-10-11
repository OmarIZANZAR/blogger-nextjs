import styles from '../../styles/Post.module.scss'
import React from 'react'
import moment from 'moment'
import Head from 'next/head'

import Tag from '../../components/Tag'

import { blowgrr } from '../index'

const PostById = ({ post }) => {
    return (
        <>
            <Head>
                <meta name="author" content={post.primary_author.name} />
                <meta name="description" content={post.meta_description} />
                <link rel="stylesheet" href="/assets/built/styles.css" />
                <title>{post.meta_title}</title>
            </Head>
        
            <div className={styles.container}>
                <header id={styles.myStyle}>
                    <div className={styles.meta}>
                        <p className={styles.author}>
                            <span id={styles.byMark}>by</span>{post.primary_author.name}
                        </p>
                        <p className={styles.date}>{moment(post.updated_at).format('DD/MM/YYYY [at] hh:mm A')}</p>
                    </div>

                    <div className={styles.tags}>
                        { post.tags.map( (tag, i) => <Tag text={tag.name} size="lg" key={i} />) }
                    </div>

                    <div className={styles.title}>
                        <h2>{post.title}</h2>
                    </div>
                </header>

                <div className={styles.media}>
                    <img 
                        src={ post.feature_image }
                        alt={ post.title}
                    />
                </div>

                <div className={styles.content}>
                    <p className={styles.excerpt}>{post.excerpt}</p>

                    <article>
                        <div
                            className="gh-content gh-canvas"
                            dangerouslySetInnerHTML={{__html: post.html}}
                        ></div>
                    </article>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    let post;
    let isError = false;

    try{
        const data = await blowgrr.getPostBySlug(context.params.slug)

        if(!data.errors){
            post = data.posts[0]
        }

    } catch(error) {
        isError = true
    }

    if(isError){
        return {
            redirect: {
                destination: '/503',
                permanent: false,
            }
        }
    }

    if(!post){
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            }
        }
    }

    return {
        props: { post }
    }
}

export default PostById