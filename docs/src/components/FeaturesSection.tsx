import type { FC } from "react";
import { features } from "../constants";
// import AnimatedSection from "@theme/AnimatedSection";
import AnimatedSection from "../theme/AnimatedSection";
import FeatureCard from "./FeatureCard";
import styles from '../pages/index.module.css';


const FeaturesSection: FC = () => {
    return (
        <section className={styles['features-section']} >
            <h2 className={styles['section-title']}>Why Choose Our UI Library?</h2>
            <div className={styles['features-grid']}>
                {features.map((feature, index) => (
                    <AnimatedSection key={index} delay={index * 0.1}>
                        <FeatureCard {...feature} />
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;