import React, { useState, useCallback } from 'react'
import { Button, Modal, TextareaAutosize, TextField, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions';
import FileBase64 from 'react-file-base64';
import makeStyle from './style'

function CratePost({ onClose }) {
    const css = makeStyle();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: '',
        author: ''
    });

    const isOpen = useSelector((state) => state.modal.isOpen)
    const handleClose = () => {
        if (onClose) {
            onClose();
            setData({
                title: '',
                content: '',
                attachment: '',
                author: ''
            })
        }
    }

    const onSubmit = useCallback(() => {
        data.author = "Duy Haivl"
        dispatch(actions.createPost.createPostRequest(data))
        handleClose();
        setData({
            title: '',
            content: '',
            attachment: '',
            author: ''
        })
    }, [data, dispatch])

    const body = (
        <div className={css.modal} id='simple-modal-title'>
            <h2>Create New Post</h2>
            <form noValidate autoComplete='off' className={css.form}>
                <TextField
                    className={css.title}
                    required
                    label='Title'
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />
                <TextareaAutosize
                    className={css.textarea}
                    rowsMin={10}
                    rowsMax={15}
                    placeholder='Content...'
                    value={data.content}
                    onChange={(e) => setData({ ...data, content: e.target.value })}
                />
                <FileBase64
                    accept='image/*'
                    multiple={false}
                    type='file'
                    value={data.attachment}
                    onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
                />
                <div className={css.footer}>
                    <Grid container spacing={2} alignItems='stretch'>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant='contained'
                                color='primary'
                                component='span'
                                fullWidth
                                onClick={() => { onSubmit() }}
                            >
                                Create
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant='contained'
                                color='primary'
                                component='span'
                                fullWidth
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                Close
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    );

    return (
        <Modal open={isOpen}>
            {body}
        </Modal>
    )
}

export default CratePost

