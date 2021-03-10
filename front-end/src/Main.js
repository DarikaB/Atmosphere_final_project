import Snow from "./Snow";
import Rain from "./Rain";
import Wind from "./Wind";
import Sun from "./Sun";
import Player from "./Player";
import Playlist from "./Playlist";
import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Login.css";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
	// constructor(props) {
	//   super(props);
	// }

	getHashParams() {
		var hashParams = {};
		var e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ((e = r.exec(q))) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	}


  // change this to accomodate a sun card. change this function. Make a moon card
	getWeatherCard() {
		const params = this.getHashParams();
		let weatherCard = params.weatherCard;

		if (weatherCard === "wind") {
			return <Wind />;
		} else if (weatherCard === "sun") {
			return <Sun temp={params.temp}/>
		} else if (weatherCard === "snow") {
			return <Snow />;
		} else if (weatherCard === "rain") {
			return <Rain />;
		}
	}

	render() {
		const params = this.getHashParams()
		return (
			<div>
				<div
					style={{
						borderBottom: "2px solid pink",
						marginBottom: 20,
					}}
				>
					<Navbar>
						<Navbar.Text>{params.zipCode}</Navbar.Text>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								{params.displayName} <i className="fab fa-spotify fa-lg"></i>
							</Navbar.Text>
						</Navbar.Collapse>
					</Navbar>
				</div>
				<Container fluid>
					<Row>
						<Col className="weatherCard">
							{/* which card is called */}
							{this.getWeatherCard()}
							<Player token={params.authToken} playlistUri={params.playlistUri} />
						</Col>
						<Col>
							<div>
								{/* <p>Playlist</p> */}
								{/* <Form inline>
									<FormControl type="text" placeholder="Search" className="mr-sm-2" />
									<Button variant="outline-success">Search</Button>
								</Form> */}
								{/* <Search /> */}
								<Playlist token={params.authToken} playlistUri={params.playlistUri} />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Main;
