import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Post = (props) => {
    const classes = useStyles();
    const {title, id } = props.post;

    
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={`https://picsum.photos/id/${id + 10}/1280/720`}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                     <Link to={`/post/${id}`}> <Button variant="contained" color="primary">  Primary
                     </Button></Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;