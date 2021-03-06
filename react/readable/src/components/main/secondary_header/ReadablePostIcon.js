import React from "react";

const ReadablePostIcon = ({ size = 30, primaryColor = "currentColor" }) => {
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 50 25"
			width={size * 2}
			height={size}
			style={{
				verticalAlign: "middle",
				padding: "4px"
			}}
		>
			<defs>
				<mask id="post-icon-mask">
					<path
						fill="white"
						d="M4.55 25C8.64 25 41.36 25 45.46 25C47.96 25 50 23.39 50 21.43C50 19.64 50 5.36 50 3.57C50 1.61 47.96 0 45.46 0C41.36 0 8.64 0 4.55 0C2.05 0 0.02 1.61 0.02 3.57C0.02 7.14 0 19.64 0 21.43C0 23.39 2.05 25 4.55 25Z"
						id="post-icon-background-rect-mask"
					/>

					<path
						d="M13.5 0L13.5 25L12.5 25L12.5 0L13.5 0Z"
						id="post-icon-vertical-divider"
					/>
					<path
						d="M12.5 10.5L12.5 14.5L0 14.5L0 10.5L12.5 10.5Z"
						id="post-icon-voter-horizontal-dividers"
					/>
					<path
						d="M30 3.75L30 7.75L15 7.75L15 3.75L30 3.75Z"
						id="post-icon-title-rect"
					/>
					<path
						d="M48.5 10.5L48.5 14.5L15 14.5L15 10.5L48.5 10.5Z"
						id="post-icon-body-preview-rect"
					/>
					<path
						d="M30 18.77L30 22.77L15 22.77L15 18.77L30 18.77Z"
						id="post-icon-timestamp-rect"
					/>
					<path
						d="M48.31 3.75L48.31 7.75L35.81 7.75L35.81 3.75L48.31 3.75Z"
						id="post-icon-category-rect"
					/>
					<path
						d="M8.7 16.55L8.75 16.75L8.75 19.25L8.74 19.35L8.7 19.44L8.65 19.53L8.57 19.6L6.51 21.25L6.18 20.99L6.12 20.93L6.08 20.87L6.05 20.8L6.04 20.72L6.05 20.64L6.35 19.5L4.38 19.5L4.14 19.46L3.94 19.35L3.8 19.19L3.75 19L3.76 18.98L3.75 18.98L3.75 18.5L3.76 18.45L3.76 18.4L3.78 18.36L3.8 18.32L4.74 16.55L4.83 16.43L4.97 16.33L5.13 16.27L5.32 16.25L8.13 16.25L8.37 16.29L8.57 16.4L8.7 16.55Z"
						id="post-icon-voter-thumb-down"
					/>
					<path
						d="M6.42 4.13L6.45 4.2L6.46 4.28L6.45 4.33L6.45 4.36L6.15 5.5L8.12 5.5L8.37 5.54L8.57 5.65L8.7 5.81L8.75 6L8.75 6.02L8.75 6.02L8.75 6.5L8.75 6.55L8.74 6.59L8.72 6.64L8.71 6.68L7.76 8.45L7.67 8.57L7.54 8.67L7.37 8.73L7.19 8.75L4.37 8.75L4.13 8.71L3.93 8.6L3.8 8.44L3.75 8.25L3.75 5.75L3.76 5.65L3.8 5.56L3.86 5.47L3.93 5.4L5.99 3.75L6.32 4.01L6.38 4.07L6.42 4.13Z"
						id="post-icon-voter-thumb-up"
					/>
				</mask>
			</defs>

			<g>
				<path
					fill={primaryColor}
					d="M4.55 25C8.64 25 41.36 25 45.46 25C47.96 25 50 23.39 50 21.43C50 19.64 50 5.36 50 3.57C50 1.61 47.96 0 45.46 0C41.36 0 8.64 0 4.55 0C2.05 0 0.02 1.61 0.02 3.57C0.02 7.14 0 19.64 0 21.43C0 23.39 2.05 25 4.55 25Z"
					id="post-icon-background-rect"
					style={{ mask: "url(#post-icon-mask" }}
				/>
				<path
					fill={primaryColor}
					d="M12.5 11.5L12.5 13.5L0 13.5L0 11.5L12.5 11.5Z"
					id="post-icon-voter-count-rect"
				/>
			</g>
		</svg>
	);
};

export default ReadablePostIcon;
