// data
var data = {
	"recipes": [
				{
					"id": 1,
					"name": "Secret Arcaffe brew",
					"Weight": "16g",
					"Ratio": "1:2",
					"Cup": "32g",
					"Time": "26s",
					"Temperature": "93°C 199.4°F /  366.15K",

					"Grind size":"14",
					"Grind time":"16s",
					"Grinder":"Rocket Super Fausto",
					"Type":"75mm Flat burrs",

					"Bean":"Arcaffe Mokacrema",
					"Type":"Whole beans",
					"Variety":"Arabica 100%",
					"Roast":"Medium",
					"Origin":"Brasilien, El Salvador, Etiopien, Guatemala",

					"Machine":"Rocket Appartamento",
					"Filter":"Bottomless portafilter, 58mm",
					"Tamper":"Rocket tamper"
				},
				{
					"id": 2,
					"name": "Secret Arcaffe brew 2",
					"Weight": "16g",
					"Ratio": "1:2",
					"Cup": "32g",
					"Time": "26s",
					"Temperature": "93°C 199.4°F /  366.15K",
					"Grind size":"14",
					"Grind time":"16s",
					"Grinder":"Rocket Super Fausto",
					"Type":"75mm Flat burrs",

					"Bean":"Arcaffe Mokacrema",
					"Type":"Whole beans",
					"Variety":"Arabica 100%",
					"Roast":"Medium",
					"Origin":"Brasilien, El Salvador, Etiopien, Guatemala",

					"Machine":"Rocket Appartamento",
					"Filter":"Bottomless portafilter, 58mm",
					"Tamper":"Rocket tamper"
				},
		],
	"machines": [
				{
					"id": 1,
					"brand": "Rocket",
					"model": "EPICA",
					"pressure_profile_system": "Yes",
					"pid_pressure_control": "Yes",
					"shot_timer": "Yes",
					"boilers": [
								{"id": 1, "outlet": "steamer", "capacity": "1.9"}, // capacity L
								{"id": 2, "outlet": "brewer", "capacity": "3.6"} // capacity L
							],
					"total_boiler_capacity": "5.5",
					"water_feed": "Hard plumbing", // Reservoir / Hard plumbing
					"wattage": "220-240V; 50/60Hz; 1600W",
					"width": "420", //mm
					"depth": "505", //mm
					"height": "645", //mm
					"weight": "42.4", // kg
				},
				{
					"id": 2,
					"brand": "Rocket",
					"model": "Appartamento",
					"pressure_profile_system": "No",
					"pid_pressure_control": "Yes",
					"shot_timer": "Yes",
					"boilers": [
								{"id": 1, "outlet": "Head & Steam", "capacity": "1.8"}
							],
					"total_boiler_capacity": "1.8", // L
					"water_feed": "Reservoir", // Reservoir / Hard plumbing
					"wattage": "220-240V; 50/60Hz; 1350W",
					"width": "335", //mm
					"depth": "420", //mm
					"height": "400", //mm
					"weight": "23", // kg
				}
	]
};