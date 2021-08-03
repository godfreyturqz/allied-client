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

export const postReqIndex = async (formData: ReqIndexForm) => {

    try {
        const { data } = await new ApiRequest('POST', '', formData).toProjectIndex()
        console.log(data)

        const filteredData: Data  = {
            uniqid: data.uniqid,
            reqLine: data.reqLine,
            description: data.description
        }

        return filteredData
        
    } catch (error) {
        console.log('API postReqIndex error:', error)
        throw new Error(error.message)
    }
}

export const getReqIndex = async () => {

    try {
        const { data } = await new ApiRequest('GET').toProjectIndex()
        console.log(data)

        const filteredData: Data[]  = data.map((res: Data)  => {
            return {
                uniqid: res.uniqid,
                reqLine: res.reqLine,
                description: res.description
            }
        })

        return filteredData
        
    } catch (error) {
        console.log('API getReqIndex error:', error)
        throw new Error(error.message)
    }
}

export const deleteReqIndex = async (id: string) => {

    try {

        const { data } = await new ApiRequest('DELETE', id).toProjectIndex()
        console.log(data)

        const filteredData: Data  = {
            uniqid: data.uniqid,
            reqLine: data.reqLine,
            description: data.description
        }

        return filteredData
        
    } catch (error) {
        console.log('API deleteReqIndex error:', error)
        throw new Error(error.message)
    }
}
    