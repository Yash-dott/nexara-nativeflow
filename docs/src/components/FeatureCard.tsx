import type { FC } from "react";
import styles from '../pages/index.module.css';

type props = {
    title: string;
    description: string;
    icon: string
}

const FeatureCard: FC<props> = ({ title, description, icon }) => {
    return (
        <div className={styles['feature-card']}>
            <div className={styles['feature-icon']}>{icon}</div>
            <h3 className={styles['feature-title']}>{title}</h3>
            <p className={styles['feature-description']}>{description}</p>
        </div>
    );
}

export default FeatureCard;