import "./App.css";
import LinkedInLink from './components/LinkedInLink';
import WebVitalsDisplay from './components/WebVitalsDisplay';
import RepoLink from './components/RepoLink';
const href = "https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2F4chen500%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3d7A5i0t3JDI7XH0zVoWmq"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<LinkedInLink href={href} />
			</header>
			<WebVitalsDisplay />
            <RepoLink />
            <div id="my_content_zone" />
		</div>
	);
}

export default App;
