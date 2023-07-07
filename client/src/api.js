import config from './config.json';
import axios from "axios";

export const getAllGrades = async () => {
    const response = await axios.get(`${config.api.baseUrl}${config.api.routes.getAllGrades}`);

    return response.data;
};

export const addNewGrade = async (data) => {
    const response = await axios.post(`${config.api.baseUrl}${config.api.routes.addNewGrade}`, data);

    return response.data;
};

export const deleteGrade = async (id) => {
    const response = await axios.delete(`${config.api.baseUrl}${config.api.routes.deleteGrade}${id}`);

    return response.data;
};
