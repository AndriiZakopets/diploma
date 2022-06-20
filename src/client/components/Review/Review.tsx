import React from 'react';
import moment from 'moment';
import styles from './Review.module.scss';

type Props = {
  review;
};

function Review({ review }: Props) {
  const paragraphs = React.useMemo(
    () =>
      review.content
        .split('\r\n')
        .filter((text) => text.length > 0)
        .map((text) => text.replace(/(<([^>]+)>)/gi, '')),
    [review]
  );
  const avatarBaseUrl = 'https://www.gravatar.com/avatar';
  const avatarPath = review.author_details.avatar_path.split('/').at(-1);
  const avatarSrc = `${avatarBaseUrl}/${avatarPath}`;

  return (
    <div className={styles.container}>
      <div className={styles.grouped}>
        <div className={styles.avatar}>
          {review.author_details.avatar_path ? (
            <img loading="lazy" src={avatarSrc} alt={review.author} />
          ) : (
            <span>{review.author[0]}</span>
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.ratingWrapper}>
            <h3>A review by {review.author}</h3>
            <div className={styles.rating}>
              {(review.author_details.rating || 0).toFixed(1)}
            </div>
          </div>
          <h5>
            Written on {moment(review.created_at).format('MMMM DD, YYYY')}
          </h5>
        </div>
      </div>
      <div className={styles.teaser}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default Review;
