
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from 'recoil';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<Suspense callback={<div>Loading . . .</div>}>
				<App />
			</Suspense>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);