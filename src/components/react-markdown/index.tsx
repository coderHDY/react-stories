import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const Md = props => {
    const [ text, setText ] = useState("");
    // Finish!
    const handleEditorChange = ({ html, text: md }: any ) => {
      setText(md);
    }
  return (
    <>
        <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
        <div dangerouslySetInnerHTML={{__html: mdParser.render(text)}}></div>
    </>
  );
};

export default Md;