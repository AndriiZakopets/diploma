import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import UserAvatar from '../UserAvatar';
import styles from './CommentBox.module.scss';
import type { User } from '../../../shared/types';
const INITIAL_HEIGHT = 46;

type Props = {
  user: User;
  onSubmit: (content: string) => void;
};

function CommentBox({ user, onSubmit }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  const outerHeight = useRef(INITIAL_HEIGHT);
  const containerRef = useRef(null);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue('');
    setIsExpanded(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(commentValue);
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        ref={containerRef}
        className={cn(styles.commentBox, {
          [styles.expanded]: isExpanded,
          [styles.collapsed]: !isExpanded,
          [styles.modified]: commentValue.length > 0,
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
        }}
      >
        <div className={styles.header}>
          <div className={styles.user}>
            <UserAvatar username={user.username} />
            <span>{user.username}</span>
          </div>
        </div>
        <label htmlFor="comment">What are your thoughts?</label>
        <TextareaAutosize
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className={styles.commentField}
          value={commentValue}
          name="comment"
          id="comment"
          placeholder="What are your thoughts?"
        />
        <div className={styles.actions}>
          <button type="button" className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Respond
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
