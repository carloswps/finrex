import {loginSchemaType} from "@/app/(auth)/login/schemas/loginSchema";
import { revenueSchemaType } from "@/app/(realApp)/revenue/schemas/revenueSchema";
import axios from "axios";

const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const addPost = async (data: loginSchemaType): Promise<loginSchemaType> => {
    const result = await req.post('/posts', data);
    return result.data;
}

export const addRevenueValues = async (data: revenueSchemaType): Promise<revenueSchemaType> => {
    const result = await req.post('/posts', data);
    return result.data;
}