export const getAllSppData = async () => {
	const response = await fetch('http://localhost:8000/api/spp');

	const { data } = await response.json();

	const newData = data.filter(d => d.title != null);

	return newData
}

export const getDetailSppData = async (page) => {
	const response = await fetch(`http://localhost:8000/api/spp/${page}`);

	const { data } = await response.json();

	return data
}
