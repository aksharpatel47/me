// @flow
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  tableOfContents: string,
  body: string,
  title: string
};

const Content = ({ tableOfContents, body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: tableOfContents }} />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
