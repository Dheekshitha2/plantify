import React, { useEffect } from 'react';
import testSupabaseConnection from './testSupabaseConnection.js';

function App() {
  useEffect(() => {
    testSupabaseConnection();
  }, []);  // The empty array ensures it runs only once after the component mounts

  return (
    <div className="App">
      <h1>Check the console for Supabase connection test results</h1>
    </div>
  );
}

export default App;
