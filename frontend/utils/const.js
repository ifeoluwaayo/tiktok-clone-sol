import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from "./tiktok_clone.json";

export const SOLANA_HOST = clusterApiUrl("devnet");

export const TIKTOK_PROGRAM_ID = new PublicKey(
	"GxHJHAfxqUpG4JKHXEhfR85Z4MnyWtaKF2sLEhK8N1k9"
);

export const TIKTOK_IDL = tiktok;
