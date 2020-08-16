import React, { Component } from 'react';
import Editor from './components/editor';
import Preview from './components/preview';
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: this.placeholder,
      editorMaximized: false,
      previewMaximized: false,
    };
  }
  placeholder = `# Welcome to my React Markdown Previewer!
    
  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;
  handleChange = (e) => {
    this.setState({
      markdown: e.target.value,
    });
  };
  handleEditorMaximize = () => {
    console.log('aa');
    this.setState({
      editorMaximized: !this.state.editorMaximized,
    });
  };
  handlePreviewMaximize = () => {
    this.setState({
      previewMaximized: !this.state.previewMaximized,
    });
  };
  render() {
    const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', faCompressArrowsAlt]
      : this.state.previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', faCompressArrowsAlt]
      : ['editorWrap', 'previewWrap', faArrowsAlt];
    return (
      <div>
        <Editor
          markdown={this.state.markdown}
          onClick={this.handleEditorMaximize}
          onChange={this.handleChange}
          editorMaximized={this.state.editorMaximized}
          previewMaximized={this.state.previewMaximized}
          classes={classes[0]}
          icon={classes[2]}
        />
        <Preview
          onClick={this.handlePreviewMaximize}
          markdown={this.state.markdown}
          editorMaximized={this.state.editorMaximized}
          previewMaximized={this.state.previewMaximized}
          classes={classes[1]}
          icon={classes[2]}
        />
      </div>
    );
  }
}

export default App;
