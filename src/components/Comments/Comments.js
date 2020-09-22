import React from "react";
import {ListItem, Avatar, ListItemAvatar, ListItemText, Divider} from "@material-ui/core";

const Comment = (props) => {
	const {comment} = props;
	return (
		<>
			<ListItem alignItems="flex-start" key={comment.id}>
				<ListItemAvatar>
					<Avatar src={`https://randomuser.me/api/portraits/women/${comment.id}.jpg`} alt="" />
				</ListItemAvatar>
				<ListItemText>	
				<h2>{comment.name}</h2>
				<p>{comment.email}</p>
				<p>{comment.body}</p>
				</ListItemText>
			</ListItem>
			<Divider variant="inset" />
		</>
	);
};

export default Comment;