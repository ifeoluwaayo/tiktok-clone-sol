import React from "react";
import styles from "../styles/Signup.module.css";
import { useState } from "react";

const Signup = ({ signup, wallet }) => {
	const [username, setUserName] = useState();
	const [profile, setProfile] = useState();

	const signUpClicked = () => {
		console.log("signup clicked");
		signup(username, profile);
	};

	return (
		<div className={styles.authContainer}>
			<h1 className={styles.title}>Sign up to use Tiktok</h1>
			<div className={styles.signupForm}>
				<div className={styles.inputField}>
					<div className={styles.inputTitle}>Username:</div>
					<div className={styles.inputContainer}>
						<input
							type="text"
							className={styles.input}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.inputField}>
					<div className={styles.inputTitle}>Profile Image:</div>
					<div className={styles.inputContainer}>
						<input
							type="text"
							className={styles.input}
							onChange={(e) => setProfile(e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className={styles.loginButton} onClick={signUpClicked}>
				Sign up
			</div>
		</div>
	);
};

export default Signup;
