marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

function App() {
  const { text, setText } = React.useState("");

  return (
    <div className="App">
      <nav className="markdown">
        <h1>Markdown Editor</h1>
      </nav>
      <h3>Textarea</h3>
      <div className="containers">
        <textarea
          id="editor"
          name="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <h3>Preview</h3>
      <div className="containers">
        <Preview markdown={text} />
      </div>
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
