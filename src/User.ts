import faker from "faker/locale/en_US";
faker.locale = "en_US";

export class User {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string;
	status: string;

	constructor(status: string) {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
		this.color = status === "online" ? "green" : "red";
	}

	markerContent(): string {
		return `User Name: ${this.name}`;
	}
}
