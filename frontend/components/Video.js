import React, { useRef, useState } from "react";
import styles from "../styles/Video.module.css";
import Comments from "./Comments";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Video = ({
	address,
	url,
	channel,
	description,
	index,
	likes,
	shares,
	likeVideo,
	likeAddress,
	createComment,
	getComments,
	commentCount,
}) => {
	const [playing, setPlaying] = useState(false);
	const [showCommentsModal, setShowCommentsModal] = useState(false);
	const videoRef = useRef(null);

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	const hideComments = () => {
		setShowCommentsModal(false);
	};

	const showComments = () => {
		setShowCommentsModal(true);
	};

	return (
		<div className={styles.wrapper}>
			<video
				className={styles.videoPlayer}
				ref={videoRef}
				loop
				onClick={onVideoPress}
				src={url}
				style={{ objectFit: "cover" }}
			/>

			<Footer channel={channel} description={description} song={index} />

			<SideBar
				address={address}
				likes={likes}
				shares={shares}
				onShowComments={showComments}
				likeVideo={likeVideo}
				index={index}
				likesAddress={likeAddress}
				messages={commentCount}
			/>

			{showCommentsModal && (
				<Comments
					onHide={hideComments}
					index={index}
					address={address}
					createComment={createComment}
					getComments={getComments}
					commentCount={commentCount}
				/>
			)}
		</div>
	);
};

export default Video;
