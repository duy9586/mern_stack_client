import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Avatar, CardActions, CardMedia, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Favorite, MoreVert } from '@material-ui/icons';
import { updatePostLike } from '../../../redux/actions/index';
import moment from 'moment';

export default function Post({ post }) {
    
    const dispatch = useDispatch();
    const data = useSelector(state => state.posts.data);

    const updateLike = useCallback((id, likes) => {
        dispatch(updatePostLike.updatePostLikeRequest({ likes: likes, id: id }))
    }, [data])

    return (
        <Card>
            <CardHeader avatar={<Avatar>{ post.author.split("")[0] }</Avatar>}
                title={post.author}
                subheader={moment(post.createdAt).format('HH:MM MMM DD, YYYY')}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                } />
            <CardMedia image={post.attachment} title="Title" style={{ height: 150 }} />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={() => { updateLike(post._id, post.likes + 1) }}>
                    <Favorite />
                    <Typography component="span" color="textSecondary">
                        {post.likes}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}

Post.propTypes = {

}
