import styles from '../styles/PostCard.module.scss'
import React from 'react'
import moment from 'moment'

import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

const PostCard = ({ post }) => {
    return (
        <Link href={`/blogs/${post.slug}`}>
            <div className={styles.card}>
                <div className={styles.media}>
                    <Image 
                        src={ post.feature_image }
                        alt={ post.title}
                        height={200}
                        width={355}
                    />
                </div>
                <div className={styles.body}>
                    <div className={styles.content}>
                        <h2>{post.title}</h2>
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
                            <p className={styles.date}> {moment(post.updated_at).format('DD/MM/YYYY [at] hh:mm A')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
