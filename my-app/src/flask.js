
export const getData = async () => {
    try {
        console.log("step 1");
        const response = await fetch('http://localhost:5000/api/data');
        const resVal = response.json();
        console.log("step 2: ", resVal);
        return resVal;
    } catch (error) {
        console.log("Error Getting Data: ", error);
    }
    // .then(response => response.json())
    // .then(data => { setInfo(data); } ) 
    // .catch(error => console.error('There was an error!', error));
}