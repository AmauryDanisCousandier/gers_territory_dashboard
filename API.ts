export default class API {
	
	private static async getRequest(query: string) {
		console.log('Fetching on', query)
		const res = await fetch(query, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			}
		})
		const data = await res.json()
		if (data.error)
			throw data.message;
		return data;
	}


	public static async getDepartmentUndergroundwaterPoints() {
		return API.getRequest('https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?code_departement=32&format=json&size=30');
	}
}