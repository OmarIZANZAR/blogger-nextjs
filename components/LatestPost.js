import styles from '../styles/LatestPost.module.scss'
import React from 'react'
import moment from 'moment'

import Link from 'next/link'
import Image from 'next/image'
import Tag from './Tag'

import latestPost from '../public/latestpost/latest-post.svg'

const LatestPost = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionName}>
                <Image
                    src={latestPost}
                    alt="top rated"
                />
            </div>

            <div className={styles.media}>
                <Image 
                    src={post.feature_image}
                    alt={post.title}
                    width={600}
                    height={400}
                />
            </div>
            <div className={styles.body}>
                <div className={styles.content}>
                    <Link href={`/blogs/${post.slug}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.excerpt}</p>
                </div>

                <div className={styles.footer}>
                    <div className={styles.tags}>
                        {post.tags.map( (tag, i) => <Tag text={tag.name} size="lg" key={i} />)}
                    </div>
                    <div className={styles.meta}>
                        <p className={styles.author}>
                            <span className={styles.byMark}>by</span>{post.primary_author.name}
                        </p>
                        <p className={styles.date}>{moment(post.updated_at).format('DD/MM/YYYY [at] hh:mm A')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestPost
