import { Flex, Textarea } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { MenuBar } from "./components/MenuBar";
import "./App.css";
import { fetchAnalize } from "./services/analizer";

function App() {
  const [console, setConsole] = useState("");
  const [editor, setEditor] = useState("");

  const handleEditorChange = (e: string) => {
    setEditor(e);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    fetchAnalize({ input: editor }).then((console) => setConsole(console));
  };

  return (
    <main>
      <MenuBar handleSubmit={handleSubmit} />
      <Flex
        gap={2}
        p={5}
      >
        <Editor
          height="90vh"
          theme="vs-dark"
          value={editor}
          onChange={handleEditorChange}
          language="javascript"
        ></Editor>
        <Textarea
          isReadOnly
          size="sm"
          value={console}
          placeholder="Consola..."
          rows={40}
          backgroundColor={"gray.800"}
          color={"#fff"}
        ></Textarea>
      </Flex>
    </main>
  );
}

export default App;
