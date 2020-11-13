import React from "react"

function ErrorMessage(props) {
	return (
		<div className={props.className}>
			<span>{props.message}</span>
		</div>
	)
}

export default ErrorMessage