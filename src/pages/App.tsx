import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/auth";
import { ThemeToggle } from "@/components/ThemeToggle";

function App() {
  const [count, setCount] = useState(0);
  const token = useAuthStore.useToken();
  const updateAuth = useAuthStore.useUpdateAuth();

  useEffect(() => {
    if (token == "") {
      console.log("its empty");
      updateAuth({ token: "123", expiresIn: 100 });
    } else {
      console.log("token: " + token);
    }
  }, []);

  return (
    <>
      <ThemeToggle />
      <h1>Vite + React</h1>
      <div className="card">
        <div>count is {count}</div>
        <Button onClick={() => setCount((count) => count + 1)}>Click Me</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
