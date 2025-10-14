import "./App.css";
import LinkedInLink from './components/LinkedInLink';
import WebVitalsDisplay from './components/WebVitalsDisplay';
import RepoLink from './components/RepoLink';
import { useState } from 'react';
const href = "https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2F4chen500%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3d7A5i0t3JDI7XH0zVoWmq"

function App() {
    // 1. State to hold the email input's value
    const [email, setEmail] = useState('');

    // 2. Handler for when the input value changes
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // 3. Handler for when the form is submitted (the "no-op" part)
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission (which would reload the page)
        console.log('Email submitted (no-op):', email);
        console.log('That actually does nothing');
        // You can add a temporary alert or a message here if you want immediate feedback
        // alert(`Email "${email}" would have been submitted!`);
        setEmail(''); // Optionally clear the input field after submission
    };
    return (
        <div className="App">
            <script type="text/javascript" async src="//cdn.evgnet.com/beacon/partneroffpremus/jycsandbox/scripts/evergage.min.js"></script>
            <header className="App-header">
                <LinkedInLink href={href} />
            </header>
            <div id="my_content_zone" />
            <WebVitalsDisplay />
            <RepoLink />
            {/* --- START: Email Input and Submit Form --- */}
            <div id="submit_form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailInput" style={{ display: 'block', marginBottom: '8px' }}>
                        Enter your email:
                    </label>
                    <input
                    type="email"
                    id="emailInput"
                    value={email} // Controlled component: input value is tied to state
                    onChange={handleEmailChange} // Update state on every change
                    placeholder="your.email@example.com"
                    required // Makes the field mandatory for HTML5 validation
                />
                        <button
                        type="submit"
                    >
                            Subscribe
                    </button>
                </form>
                {email && <p style={{ marginTop: '15px', fontSize: '0.9em', color: '#666' }}>Current input: {email}</p>}
            </div>
            {/* --- END: Email Input and Submit Form --- */}
        </div>
    );
}

export default App;
