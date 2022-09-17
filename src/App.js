import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';
import readme from './getting-started-with-unidokkan.md';
// import './App.css';
import ReactMarkdown from 'react-markdown';
// import style from './markdown-styles.module.css';
export default function ComponentName() {
    const [html, setHTML] = useState("");

    //Use componentDidMount(): if class based component to load md file
    useEffect(() => {
        fetch(readme)
            .then(data => data.text())
            .then(text => {
                // const converter = new showdown.Converter();
                setHTML(text);
            })
    }, []);

    return (
        <div>
          <ReactMarkdown children={html} />
        </div>
    )
}