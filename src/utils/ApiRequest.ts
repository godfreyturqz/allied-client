import axios, { AxiosRequestConfig, Method } from 'axios'

// for dev
const isCloudServer = false

export class ApiRequest {

    API_BASE_URL: string
    httpReqMethod: Method
    id: string
    objectData: object

    constructor(httpReqMethod: Method, id: string = '', objectData: object = {}){
        this.API_BASE_URL = isCloudServer ? 'https://gt-allied.herokuapp.com/api/v1' : 'http://localhost:5000/api/v1'
        this.httpReqMethod = httpReqMethod
        this.id = id
        this.objectData = objectData
    }

    axiosRequest(APIRoute: string){
        const config: AxiosRequestConfig = {
            url: `${this.API_BASE_URL}/${APIRoute}/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        }
        const response = axios.request(config)

        return response
    }
    
    toProjectIndex = () => this.axiosRequest('projectIndex')

}
