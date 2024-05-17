
import { FakeEventsData, FakeProfilData, FakeSchoolNameData, FakeUserData, FakedisciplineData, receivedMessagesChatData } from "../Fakers/Fakers";


export const getReceivedMessagesChatData = async () => {
    
    try {
        const data = receivedMessagesChatData
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

    export const getProfilData = async () => {

        try {
            const data = FakeProfilData
            return data
        } catch (error) {
            console.log(error);
        }
    }

    export const getUserData = async () => {

        try {
            const data = FakeUserData
            return data
        } catch (error) {
            console.log(error);
        }
    }

    export const getFakeEventsData = async () => {

        try {
            const data = FakeEventsData
            return data
        } catch (error) {
            console.log(error);
        }
    }