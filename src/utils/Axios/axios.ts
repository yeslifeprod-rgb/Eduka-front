import axios from "axios";


export const getFakers = async () => {
    
    try {
        const response = await axios.get('./Fakers/Faker');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

