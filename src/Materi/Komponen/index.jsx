import React from "react";
import ClassComponent from "./pembahasan/ClassComponent.jsx";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {

	render() {
		return (
			<div>
				<ClassComponent nama="Wend Abdul Rohim"/>
				<FunctionalComponent />
			</div>
			)
	}
}