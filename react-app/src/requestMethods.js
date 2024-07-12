import axios from "axios";


const BASE_URL="http://localhost:5000/api";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGFhNmZhNjI3YWMzZWNlY2JiZTU5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMDc4MDQwNywiZXhwIjoxNzIxMDM5NjA3fQ.PVxiG80lQpsu52ScXcfg5-1j2Awij-2lIyXpolnUDME"


export const publicRequest=axios.create(
    {
        baseURL:BASE_URL,
    }
);

export const userRequest=axios.create(
    {
        baseURL:BASE_URL,
        header:{token:`Bearer ${TOKEN}`}
    }
);