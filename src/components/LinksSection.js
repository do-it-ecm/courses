import React from 'react';
import styles from './LinksSection.module.css';

const LinksSection = ({ title, links }) => {
  return (
    <div className={styles.linksSection}>
      <div className={styles.titleContainer}>
      <img src="/do-it/icons/link.png" alt="links" />
      <big><b>{title ? title : 'Liens'}</b></big>
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.displayName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSection;