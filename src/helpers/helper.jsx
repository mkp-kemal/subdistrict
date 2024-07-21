// export const rootUrl = 'http://localhost:5000/';
export const rootUrl = 'https://subdistrict-backend.vercel.app/';
const baseUrl = `${rootUrl}v1/api`;



export const baseURLAPI = (endpoint) => `${baseUrl}/${endpoint}`;

export default baseUrl;