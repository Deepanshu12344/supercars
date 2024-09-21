export default async function About(){
    const url = 'https://supercars.p.rapidapi.com/supercars';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ba8113c3f5msh2f50590f285ff22p10be9ejsn394e3bfc07aa',
		'x-rapidapi-host': 'supercars.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    return(
        <div>
            About
        </div>
    )
}