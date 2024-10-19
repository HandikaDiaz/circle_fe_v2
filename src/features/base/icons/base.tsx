import type { SVGProps } from 'react';

export function LineMdArrowSmallLeft(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}><path strokeDasharray={16} strokeDashoffset={16} d="M19 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.1s" values="16;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M5 12l5 5M5 12l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.1s" values="10;0"></animate></path></g></svg>);
}

export function LineMdHeart(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="white" strokeDasharray={32} strokeDashoffset={32} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.35s" values="32;0"></animate></path></svg>);
}

export function LineMdChat(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}><path strokeDasharray={72} strokeDashoffset={72} d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="72;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M8 7h8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.35s" dur="0.1s" values="10;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M8 10h8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" values="10;0"></animate></path><path strokeDasharray={6} strokeDashoffset={6} d="M8 13h4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.1s" values="6;0"></animate></path></g></svg>);
}