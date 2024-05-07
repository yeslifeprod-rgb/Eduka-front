
import { FakeSchoolNameData, FakedisciplineData, fakeEventData, receivedMessagesChatData } from "../Fakers/Fakers";


export const getReceivedMessagesChatData = async () => {
    
    try {
        const data = receivedMessagesChatData
        return data
    } catch (error) {
        console.log(error);
    }
}
    export const getFakeEventData = async () => {

        try {
            const data = fakeEventData
            return data
        } catch (error) {
            console.log(error);
        }
    }

    export const getDisciplinesData = async () => {

        try {
            const data = FakedisciplineData
            return data
        } catch (error) {
            console.log(error);
        }
    }

    export const getSchoolNameData = async () => {

        try {
            const data = FakeSchoolNameData
            return data
        } catch (error) {
            console.log(error);
        }
    }