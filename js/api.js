const BASE_URL = "http://localhost:9090";
const RESOURSE_URL = `${BASE_URL}/clip`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const parametrsRequest = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body
        };

        if (body) {
            parametrsRequest.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, parametrsRequest);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getClips = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
    return await rawResponse.json();
};

export const postClip = (body) =>
    baseRequest({ method: "POST", body });

export const updateClip = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteClip = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });