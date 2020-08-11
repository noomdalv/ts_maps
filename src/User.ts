import faker from "faker/locale/en_US";
faker.locale = "en_US";

export class User {
	name: string;
	ip: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string;
	status: string;
	avatar: string;

	constructor(status: string) {
		this.name = faker.name.firstName();
		this.ip = faker.internet.ip();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
		this.status = status;
		this.color = status === "online" ? "green" : "red";
		this.avatar = faker.image.avatar();
	}

	markerContent(): string {
		const bg: string = this.color === "green" ? "#26b756" : "red";
		return `
		<div class="card user">
			<div class="content">
				<img class="right floated ui image" src="${this.avatar}">

				<div class="userstatus">
					<div class="description">
						<div class="username">
							${this.name}
						</div>
						<p class="status-icon" style="background-color: ${bg}"></p>
						<span>${this.status}</span>						
					</div>
					<h6>Developer</h6>
				</div>		
				<div class="userip">
					<b>IP:&nbsp</b>
					<p>${this.ip}</p>
				</div>											
			</div>			
		</div>
		`;
	}
}
