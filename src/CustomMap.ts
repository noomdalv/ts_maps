export interface Item {
	location: {
		lat: number;
		lng: number;
	};
	color: string;
	markerContent(): string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 2,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(item: Item): void {
		let url = "https://maps.google.com/mapfiles/ms/icons/";
		url += item.color + "-dot.png";

		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: item.location.lat,
				lng: item.location.lng,
			},
			icon: {
				url: url,
			},
			animation: 2,
		});

		marker.addListener("click", () => {
			const infoWindow = new google.maps.InfoWindow({
				content: item.markerContent(),
			});

			infoWindow.open(this.googleMap, marker);
		});
	}
}
