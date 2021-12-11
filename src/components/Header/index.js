import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import makeStyles from '../Header/style';

Header.propTypes = {

}

export default function Header() {
    const classes = makeStyles()
    return (
        <Typography variant='h4' align='center' className={classes.container}>
            Blog
        </Typography>
    );
}

