export const getAllArticleData = async () => {
	const response = await fetch('http://localhost:8000/api/articles');

	const { data } = await response.json();

	return data
}

export const getDetailArticleData = async (id) => {
	const response = await fetch(`http://localhost:8000/api/articles/${id}`);

	const { data } = await response.json();

	return data
}

export const getLatestArticleData = async (take) => {
	const response = await fetch(`http://localhost:8000/api/articles/latest?take=${take}`);

	const { data } = await response.json();

	return data
}



