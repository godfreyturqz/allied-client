import { ApiRequest } from "../utils/ApiRequest"

type Data = {
    uniqid: string
    reqLine: string
    description: string
}

type ReqIndexForm = {
    reqLine: string
    description: string
}

export const getReqIndex = async () => {
    
    const { data } = await new ApiRequest('GET').reqIndex()

    const filteredData: Data[]  = data.map((res: Data)  => {
        return {
            uniqid: res.uniqid,
            reqLine: res.reqLine,
            description: res.description
        }
    })

    return filteredData
}

export const postReqIndex = async (formData: ReqIndexForm) => {
    
    const { data } = await new ApiRequest('POST', '', formData).reqIndex()

    const filteredData: Data  = {
        uniqid: data.uniqid,
        reqLine: data.reqLine,
        description: data.description
    }

    return filteredData
}

export const deleteReqIndex = async (id: string) => {
    
    const { data } = await new ApiRequest('DELETE', id).reqIndex()

    const filteredData: Data  = {
        uniqid: data.uniqid,
        reqLine: data.reqLine,
        description: data.description
    }

    return filteredData
}
    