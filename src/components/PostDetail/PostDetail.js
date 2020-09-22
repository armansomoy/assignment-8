import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CommentList from '../CommentList/CommentList';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PostDetail = () => {
    const classes = useStyles();
    const {postId} = useParams();

    const [post , setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, []);

    useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);



    return (
        <div>

            <h1>This is Post Detail {postId} </h1>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={`https://picsum.photos/id/${postId + 10}/1280/720`}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> {post.body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <CommentList comments={comments}></CommentList>
        </div>
    );
};

export default PostDetail;