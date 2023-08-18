import * as React from "react";

type AppleIconProps = {
	firstGradient: string;
	secondGradient: string;
};

const AppleIcon: React.FC<AppleIconProps> = ({
	firstGradient,
	secondGradient,
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={47}
			height={57}
			fill='none'>
			<path
				fill='url(#a)'
				d='M35.09 1.385c0 2.79-.998 5.395-2.99 7.806-2.402 2.866-5.308 4.522-8.46 4.261a8.849 8.849 0 0 1-.063-1.057c0-2.678 1.143-5.545 3.172-7.888 1.013-1.187 2.301-2.173 3.864-2.96C32.172.77 33.646.342 35.033.269a11.05 11.05 0 0 1 .057 1.116z'
			/>
			<path
				fill='url(#b)'
				d='M45.64 43.742a30.515 30.515 0 0 1-2.94 5.392c-1.546 2.249-2.81 3.805-3.786 4.67-1.512 1.418-3.132 2.145-4.866 2.186-1.245 0-2.747-.362-4.495-1.095-1.754-.73-3.365-1.092-4.839-1.092-1.545 0-3.203.362-4.976 1.092-1.776.733-3.206 1.116-4.3 1.154-1.663.072-3.32-.675-4.976-2.246-1.056-.94-2.377-2.551-3.96-4.834-1.698-2.438-3.094-5.265-4.187-8.488C1.143 37 .556 33.63.556 30.365c0-3.738.792-6.963 2.378-9.665 1.246-2.17 2.904-3.882 4.979-5.139a13.194 13.194 0 0 1 6.731-1.938c1.321 0 3.054.417 5.207 1.236 2.146.823 3.525 1.24 4.13 1.24.451 0 1.982-.488 4.578-1.46 2.455-.901 4.527-1.275 6.224-1.128 4.6.379 8.055 2.23 10.353 5.563-4.113 2.543-6.148 6.105-6.107 10.674.037 3.56 1.302 6.522 3.79 8.874a12.434 12.434 0 0 0 3.785 2.534 41.55 41.55 0 0 1-.965 2.586z'
			/>
			<defs>
				<linearGradient
					id='a'
					x1={23.58}
					x2={23.58}
					y1={0.269}
					y2={56.053}
					gradientUnits='userSpaceOnUse'>
					<stop stopColor={firstGradient} />
					<stop
						offset={1}
						stopColor={secondGradient}
					/>
				</linearGradient>
				<linearGradient
					id='b'
					x1={23.58}
					x2={23.58}
					y1={0.269}
					y2={56.053}
					gradientUnits='userSpaceOnUse'>
					<stop stopColor={firstGradient} />
					<stop
						offset={1}
						stopColor={secondGradient}
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};
export default AppleIcon;
