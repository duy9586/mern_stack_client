import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post/index';
import * as actions from '../../redux/actions';

export default function PostList(props) {
    const resPost = useSelector((state) => state.posts.data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getPost.getPostRequest())
    }, [dispatch])

    return (
        <Grid container spacing={2} alignItems='stretch'>
            {
                resPost.map((item, index) => {
                    return (
                        <Grid key={item._id} item xs={12} sm={6}>
                            <Post post={item}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

PostList.propTypes = {

}


