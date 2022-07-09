import React from "react";
import styles from "../styles/UploadModal.module.css";

const UploadModal = ({
	description,
	videoUrl,
	newVideo,
	setDescription,
	setVideoUrl,
	setNewVideoShow,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Upload New Video</div>
			<div className={styles.inputField}>
				<div className={styles.inputTitle}>Description</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.input}
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className={styles.inputTitle}>Video Url</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.input}
						type="text"
						value={videoUrl}
						onChange={(e) => setVideoUrl(e.target.value)}
					/>
				</div>
			</div>
			<div className={styles.modalButtons}>
				<button
					className={`${styles.button} ${styles.cancelButton}`}
					onClick={() => setNewVideoShow(false)}>
					Cancel
				</button>

				<button
					className={`${styles.button} ${styles.createButton}`}
					onClick={newVideo}>
					Create
				</button>
			</div>
		</div>
	);
};

export default UploadModal;
