import { useState, useEffect } from 'react';

export const App = () => {
  const [version, setVersion] = useState({
    node: '',
    chrome: '',
    electron: '',
  });

  useEffect(() => {
    (async () => {
      const res = await window.api.versions();
      setVersion(res);
    })();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        We are using Node.js {version.node}, Chromium {version.chrome}, and
        Electron {version.electron}.
      </p>
    </div>
  );
};
