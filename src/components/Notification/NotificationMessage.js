import React from 'react';
import styles from './notificationMessage.module.css';
import PropTypes from 'prop-types';

export function NotificationMessage ({message}) {
    return (
        <p className={styles.title}>{message}</p>
    )
}

NotificationMessage.propTypes = {
    message: PropTypes.string
}
