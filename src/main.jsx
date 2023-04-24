import React from "react";
import ReactDOM from "react-dom/client";

import ThemeProvier from "./components/ThemeProvier";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvier>
			<App />
		</ThemeProvier>
	</React.StrictMode>
);
