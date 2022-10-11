import styles from '../styles/TopPosts.module.scss'
import React from 'react'

import Image from 'next/image'
import PostCard from './PostCard'

import first from '../public/topposts/first.svg'
import second from '../public/topposts/second.svg'
import third from '../public/topposts/third.svg'
import topRated from '../public/topposts/top-rated.svg'

const TopPosts = ({ posts }) => {
    const places = [ first, second, third]

    return (
        <div className={styles.container}>
            <div className={styles.sectionName}>
                <Image
                    src={topRated}
                    alt="top rated"
                />
            </div>

            <div className={styles.grid}>
                { posts.map( ( post, i ) => (
                    <div className={styles.stage} key={i}>
                        <Image
                            className={styles.count}
                            src={places[i]}
                            alt={i+1}
                        />
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopPosts
