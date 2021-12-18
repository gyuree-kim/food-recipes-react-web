import React, { useState, useEffect } from "react"
import { getUser } from './firebase'

function App() {
  const [userId, setUserId] = useState("")

  useEffect(() => {
    async function getUserId() {
      const userList = await getUser();
      setUserId(userList[0].userId)
    }
    
    getUserId();

    return;
  }, [setUserId])

  return (
    <div className="App">
          {userId}
    </div>
  );
}

export default App;
