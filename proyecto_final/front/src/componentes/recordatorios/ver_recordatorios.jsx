import React, { Component } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './recordatoriosCss.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Vender extends Component{

	state={
		posts: []
	};


	componentDidMount = () => {
		this.getBlogPost();
	}

	checkValue(e) {
	    var value = e.target.id;
	    console.log("You selected " + value);

	    axios.get('http://localhost:5000/cambiar/'+value)
			.then((response) => {
				console.log("Se cambio el estado del " + value);
			})
			.catch(() => {
				alert("ono")
			})
  	}	

	getBlogPost = () => {
		axios.get('http://localhost:5000/data')
			.then((response) => {
				const data = response.data;
				console.log(data);
				let info = []
				for (var i = 0; i < data.length ; i++){
					if (data[i].status == "pendiente"){
						info.push(data[i])
					}
				}
				this.setState({ posts: info })

				console.log("osi");
			})
			.catch(() => {
				alert("ono");
			})
	}

	displayBlogPost = (posts) => {
	
		if (!posts.length) return console.log(":P");

		return posts.map((post, index) => (
			<div key = {index} className = "Boletas">
			{console.log(":)")}
			<br/>
				<div className="rec">
				    <h1 className="titulo"> {post.titulo} </h1>
				    <p className="descripcion"> {post.descripcion} </p>
				    <p className="fecha"> {post.fecha} </p>
				    <input className="completada" type="button" id={post.titulo} value="Completada" onClick={this.checkValue}/>
				</div>
				<br/>

			</div>
		))

	};

	render(){
		return(
		    <div className="Ver_recordatorios">
		    	{this.displayBlogPost(this.state.posts)}  	
		    </div>

		)
	}
}