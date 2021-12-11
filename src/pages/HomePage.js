import React, { useCallback, useEffect } from 'react'
import { Container, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Header from '../components/Header/index'
import PostList from '../components/PostList/index'
import makeStyles from '../pages/styles'
import CreatePostModel from '../components/CreatePostModel/index'
import { hideModal, showModal } from '../redux/actions/index'
import { useDispatch } from 'react-redux'

export default function HomePage() {
    const style = makeStyles();
    const dispatch = useDispatch();

    const openModal = useCallback(() => {
        dispatch(showModal())
    }, [dispatch])


    const handleClose = () => {
        dispatch(hideModal())
    }

    return (
        <Container maxWidth={'lg'}>
            <Header />
            <PostList />
            <CreatePostModel onClose={handleClose} />
            <Fab color={'primary'} className={style.fab} onClick={openModal}>
                <Add />
            </Fab>
        </Container>
    );
}
