import React from 'react'
import styles from '../../styles/Home.module.css'

const skeleton = () => {
    return (
        <div className="flex w-full relative items-center justify-center">
            <div className={styles.card}>
                <div class="animate-pulse">
                    <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                    <div class="h-6 bg-gray-300 rounded w-2/6"></div>
                </div>
            </div>
            <div className={styles.card}>
                <div class="animate-pulse">
                    <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                    <div class="h-6 bg-gray-300 rounded w-2/6"></div>
                </div>
            </div>
            <div className={styles.card}>
                <div class="animate-pulse">
                    <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                    <div class="h-6 bg-gray-300 rounded w-2/6"></div>
                </div>
            </div>
        </div>
    )
}

export default skeleton
