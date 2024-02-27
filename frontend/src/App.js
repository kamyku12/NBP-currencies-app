import { useState, useEffect } from "react";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members").then(async (response) => {
      const { members } = await response.json();

      setMembers(members);
    });
  }, []);

  return (
    <div className="App">
      {members && members.map((member, index) => <p key={index}>{member}</p>)}
    </div>
  );
}
export default App;
