import { ThemeProvider } from "@fluentui/react";

import { SelectExample } from "./components/async-select-example";

function App() {
  return (
    <ThemeProvider>
      {/* <Table /> */}
      <SelectExample />
    </ThemeProvider>
  );
}

export default App;
