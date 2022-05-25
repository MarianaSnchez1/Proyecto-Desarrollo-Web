import React, { Component } from 'react';
import axios from "axios";
import VerRecordatorios from './ver_recordatorios.jsx'
import './recordatoriosCss.css';

export default class Tasks extends Component{
	constructor(){
		super();
		this.state = {
			titulo: "",
			descripcion:"",
			fecha: "",

		}
		this.changetitulo= this.changetitulo.bind(this)
		this.changedescripcion = this.changedescripcion.bind(this)
		this.changefecha = this.changefecha.bind(this)

		this.onSubmit = this.onSubmit.bind(this)
	}


	changetitulo(event){
		this.setState({
			titulo:event.target.value
		})
	}

	changedescripcion(event){
		this.setState({
			descripcion:event.target.value
		})
	}

	changefecha(event){
		this.setState({
			fecha:event.target.value
		})
	}


	onSubmit(event){
		event.preventDefault()

		const nuevoRecordatorio = { 
			titulo: this.state.titulo,
			descripcion: this.state.descripcion,
			fecha: this.state.fecha,
		}

		console.log(nuevoRecordatorio)

		axios.post('http://localhost:5000/crear', nuevoRecordatorio)
			.then(response => console.log(response.data))

		this.setState({
			titulo: "",
			descripcion:"",
			fecha: "",
		})
	}

	render(){
		return(
		    <div className="recordatorios"> 
		    	<div className="espacio_arriba">
		    	</div>
		    	<div className="crear_rec">
		     	 <h2 id="titulo"> Crear recordadorio </h2>
			      <form className="datos_recordatorio" onSubmit= {this.onSubmit}>
			        <label> Titulo </label>
			        <br/>
			        <input type = "text" className="espacios" value = {this.state.titulo} onChange={this.changetitulo}/>
			        <br/>
			        <label> Descripcion</label>
			        <br/>
			        <input type = "text" className="espacios" value = {this.state.descripcion} onChange={this.changedescripcion}/>
			        <br/>
			        <label> Fecha</label>
			        <br/>
			        <input type = "date" className="espacios" value = {this.state.fecha} onChange={this.changefecha}/>
			        <br/>

			        <br/>
			        <input type = "submit" value="Guardar" id="boton"/>
			      </form>
		      </div>
		      <div className="espacio">
		      	<p> </p>
		      </div>
		      <div className="ver_rec">
		      	<VerRecordatorios/>
		      </div>
		    </div>
		)
	}
}