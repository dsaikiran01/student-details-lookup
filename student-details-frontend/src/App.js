import React, { useEffect } from 'react';
import './App.css';
import StudentLookup from './components/StudentLookup';

const TITLE = 'Student Details';

function App() {
    useEffect(() => {
        document.title = 'JNTR Students Details';
      }, []);

    return (
        <div className="App">
            <StudentLookup />
        </div>
    );
}

export default App;
