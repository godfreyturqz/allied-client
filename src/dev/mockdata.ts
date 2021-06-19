import { useState } from 'react'
import mockdata from "./mockdata.json";

const mockData = () => {

    const [fetchedData, setFetchedData] = useState<object[]>([])

    mockdata.map(obj => setFetchedData(prev => [...prev, obj]))

    return fetchedData
}

export default mockData
