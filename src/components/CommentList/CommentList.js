import React from "react";
import {List} from "@material-ui/core";
import Comments from "../Comments/Comments";

const CommentList = (props) => {
	const {comments} = props;
	return (
		<List>
			{comments.map((comment) => (
				<Comments comment={comment} key={comment.id}></Comments>
			))}
		</List>
	);
};

export default CommentList;