import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';

import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Form } from 'react-bootstrap';




function App() {
  const editorRef = useRef();

  function onClickHandler() {
    console.log(editorRef.current.getContent());
  }

  return (
    <div className="App">
    <Editor
      onInit={ (evt, editor) => editorRef.current = editor }
      initialValue="<div><span>Hi</span><br/> <span>My lovely</span><span> little</span><span> Ponny</span></div>"
    />

              <p></p>

    <button type="button" class="btn btn-primary ms-1"
            onClick={onClickHandler}
    >
    TEXT  -- to Console
    </button>

              <p></p>

    <button type="button" class="btn btn-secondary ms-1"

    >
    Convert (TEXT into JSON)  -- to Console
    </button>

              <p>  </p>
    <div class="ms-2">Для виділеного тексту поміняти:</div>
              <p></p>
<Form inline>

    <button type="button" class="btn btn-outline-success ms-1"

    >
       Колір
    </button>

    <button type="button" class="btn btn-outline-warning ms-5"

    >
       Розмір
    </button>

    <button type="button" class="btn btn-outline-danger ms-5"

    >
       Шрифт
    </button>

    <button type="button" class="btn btn-outline-info ms-5"

    >
       Фон
    </button>

</Form>
      <p></p>
      <p></p>
      <div> </div>



    </div>
  );

}


export default App;
