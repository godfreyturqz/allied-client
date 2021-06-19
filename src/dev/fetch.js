// type Data = {
//     reqLine: string
//     description: string
// }

// useEffect(() => {
//     const [fetchedData, setFetchedData] = useState<object[]>([])

//     const fetch = async () => {
//         try {
//             const { data } = await new ApiRequest('GET').reqIndex()
//             data.map((obj: Data)  => setFetchedData(prev => [...prev, {reqLine: obj.reqLine, description: obj.description}]))
//         } catch (error) {
//             throw Error(error)
//         }
//     }
//     fetch()

// }, [])