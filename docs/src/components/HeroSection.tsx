import { motion } from 'framer-motion';
import styles from '../pages/index.module.css';
import Link from '@docusaurus/Link';
import type { FC } from 'react';


const HeroSection: FC = () => {
    return (
        <div className={styles['hero-section']}>
            <div className={styles['hero-background']}>
                <div className={styles['hero-particles']} />
                <div className={styles['hero-grid']} />
                <div className={styles['hero-glow']} />
            </div>
            <div className={styles['hero-content']}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles['hero-badge']}
                >
                    <span className={styles['badge-icon']}>✨</span>
                    Pre Release v0.1.6
                    <span className={styles['badge-icon']}>✨</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={styles['hero-title']}
                >
                    Effortless UI,
                    <span className={styles['gradient-text']}> Seamless Experience.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles['hero-subtitle']}
                >
                    Build beautiful, responsive UIs effortlessly with our modern React Native UI library.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles['hero-buttons']}
                >
                    <Link className={`button button--primary button--lg ${styles['hero-button']}`} to="/docs/getting-started">
                        <span className={styles['button-content']}>
                            Get Started
                            <span className={styles['button-icon']}>→</span>
                        </span>
                    </Link>
                    {/* <Link className={`button button--secondary button--lg ${styles['hero-button']}`} to="/docs/features">
        <span className={styles['button-content']}>
          Learn More
          <span className={styles['button-icon']}>→</span>
        </span>
      </Link> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={styles['hero-stats']}
                >
                    <div className={styles['stat-item']}>
                        <span className={styles['stat-icon']}>⚡</span>
                        <span className={styles['stat-number']}>98%</span>
                        <span className={styles['stat-label']}>Performance Score</span>
                    </div>
                    <div className={styles['stat-item']}>
                        <span className={styles['stat-icon']}>🎨</span>
                        <span className={styles['stat-number']}>500+</span>
                        <span className={styles['stat-label']}>Components</span>
                    </div>
                    <div className={styles['stat-item']}>
                        <span className={styles['stat-icon']}>⚡</span>
                        <span className={styles['stat-number']}>99.9%</span>
                        <span className={styles['stat-label']}>Uptime</span>
                    </div>
                </motion.div>
            </div>
            <div className={styles['hero-scroll-indicator']}>
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={styles['scroll-text']}
                >
                    Scroll to explore
                    <span className={styles['scroll-arrow']}>↓</span>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection;