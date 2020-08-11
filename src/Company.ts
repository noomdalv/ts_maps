import faker from "faker";

export class Company {
	companyName: string;
	bs: string;
	ip: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string;

	constructor() {
		this.companyName = faker.company.companyName();
		this.bs = faker.company.bs();
		this.ip = faker.internet.ip();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
		this.color = "yellow";
	}

	markerContent(): string {
		return `
			<div class="ui card company">
				<div class="content">
					<div class="header">
						<h3>${this.companyName}</h3>
					</div>
				</div>
				<div class="content">
					<h5>${this.bs}</h5>				
					<b>Server:</b>
					<p>${this.ip}</p>
				</div>
			</div>
		`;
	}
}
