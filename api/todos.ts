import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

interface Todos {
    id: number
    title: string
    completed: boolean
}

export const getTodos = async () => {
    const { data } = await axios.get('http://localhost:3000/todos')
    return data;
}