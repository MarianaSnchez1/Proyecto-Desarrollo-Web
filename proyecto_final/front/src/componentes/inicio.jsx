import React, { Component, useState } from 'react';
import axios from "axios";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

import Notas from './notas/notas.jsx'
import NotasPreview from './notas/notas_preview.jsx'
import FileUpload2 from './libros/libros.jsx'
import Musica from './musica/musica.jsx'
import Tasks from './recordatorios/calendario.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style_main.css';
import './style_tabs.css';
function Inicio() {

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };

  return (
  	<div>
  		<div className="NavB">
  		</div>

	    <div className="todo">
			      <Tabs defaultActiveKey="forth" tabClassName="tabs">
			        <Tab eventKey="first" title="Notas" tabClassName="tabs1">
			        	<Notas onSuccess={onSuccess}/>
			        	<NotasPreview files={files}/>
			        </Tab>
			        <Tab eventKey="second" title="Musica" tabClassName="tabs2">
			        	<Musica/>
			        </Tab>
			        <Tab eventKey="third" title="Libros" tabClassName="tabs3">
			          <FileUpload2
				          accept=".jpg,.png,.jpeg"
				          label="Profile Image(s)"
				          multiple
				          updateFilesCb={updateUploadedFiles}
				        />
			        </Tab>
			        <Tab eventKey="forth" title="Recordatorios" tabClassName="tabs4">
			          <Tasks/>
			        </Tab>
			      </Tabs>
		</div>
	</div>

  );
}

export default Inicio;
