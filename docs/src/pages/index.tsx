import { type FC } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { FeaturesSection, HeroSection } from '../components';


const Home: FC = () => {

    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}
        >
            <main className={styles['home-page']}>
                <HeroSection />
                <FeaturesSection />
            </main>
        </Layout>
    );
}
export default Home;