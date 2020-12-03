import React from 'react';
import { useSelector } from 'react-redux';
import styles from './PhotosContent.module.css';

const PhotosContent = () => {
  const { list } = useSelector((state) => state.photos);
  return (
    <ul className={styles.list}>
      {list.map((p) => (
        <li className={`${styles.item} anime`} key={p.id}>
          <img className={styles.img} src={p.src} alt={p.title} />
          <h2 className={styles.title}>{p.title}</h2>
          <span className={styles.access}>{p.acessos}</span>
        </li>
      ))}
    </ul>
  );
};

export default PhotosContent;
