let baseURL = ""
if (process.env.NODE_ENV === 'production') {
    baseURL = `${process.env.REACT_APP_BACKEND_API}` 
}
else {
    baseURL = 'http://localhost:5000' 
}
export { baseURL };