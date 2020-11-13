import React, {Component} from "react"
import GoogleMapReact from 'google-map-react'
import { ISSContext } from "../../contexts/ISSContext"

const Marker = () => <div className="issMarker"></div>;

class ISSMap extends Component {
	static contextType = ISSContext
	state = {
		coords: {
			lng: this.context.coordinates.lng,
			lat: this.context.coordinates.lat
		}
	}

	render = () => {
		return (
			<div className="container" style={{height: "100%", width: "100%", gridArea: "map"}}>
				<ISSContext.Consumer>{(context) => {
					const {coordinates} = context
					return (
						<GoogleMapReact 
							bootstrapURLKeys={{ key: "AIzaSyBXCigyemeSNyLbICeIlCwqczMGWxhdvD8"}}
							initialCenter={coordinates}
							center={coordinates}
							zoom={5}
						>
							<Marker
								lat={coordinates.lat}
								lng={coordinates.lng}
							/>
						</GoogleMapReact>
					)
				}}
				</ISSContext.Consumer>
			</div>
		)
	}
}

export default ISSMap