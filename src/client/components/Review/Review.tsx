import React from 'react';
import cn from 'classnames';
import moment from 'moment';
import UserAvatar from '../UserAvatar';
import styles from './Review.module.scss';

type Props = {
  review;
};

function Review({ review }: Props) {
  return (
    <div className={cn(styles.container, { [styles.new]: review.isNew })}>
      <div className={styles.grouped}>
        <div className={styles.avatar}>
          <UserAvatar username={review.author} />
        </div>
        <div className={styles.info}>
          <div className={styles.ratingWrapper}>
            <h3>A review by {review.author}</h3>
          </div>
          <h5>Written on {moment(review.createdAt).format('MMMM DD, YYYY')}</h5>
        </div>
      </div>
      <div className={styles.teaser}>
        {review.content.split('\n').map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default Review;
