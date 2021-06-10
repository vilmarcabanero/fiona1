import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from 'actions/posts';

const Form = () => {
	const [postData, setPostData] = useState({
		creator: '',
		title: '',
		message: '',
		tags: '',
		selectedFile: '',
	});
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Create post.');
		dispatch(createPost(postData));
		clear();
	};

	const clear = () => {
		setPostData({
			creator: '',
			title: '',
			message: '',
			tags: '',
			selectedFile: '',
		});
	};

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete='off'
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant='h6'>Creating a Memory</Typography>

				<TextField
					name='creator'
					variant='outlined'
					label='Creator'
					fullWidth
					size='small'
					value={postData.creator}
					onChange={e => setPostData({ ...postData, creator: e.target.value })}
				/>
				<TextField
					name='title'
					variant='outlined'
					label='Title'
					fullWidth
					size='small'
					value={postData.title}
					onChange={e => setPostData({ ...postData, title: e.target.value })}
				/>
				<TextField
					name='message'
					variant='outlined'
					label='Message'
					fullWidth
					size='small'
					value={postData.message}
					onChange={e => setPostData({ ...postData, message: e.target.value })}
				/>
				<TextField
					name='tags'
					variant='outlined'
					label='Tags'
					fullWidth
					size='small'
					value={postData.tags}
					onChange={e => setPostData({ ...postData, tags: e.target.value })}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type='file'
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant='contained'
					color='primary'
					type='submit'
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant='contained'
					color='secondary'
					size='small'
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
