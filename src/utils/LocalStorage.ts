export class LocalStorage {

	stateLocalKey: string
	maxAge: number

	constructor(){
		this.stateLocalKey = 'state'
		this.maxAge = Date.now() + 300000 // 5 mins
	}

	saveState(value: object[]){
		try {
			const localState = {value, maxAge: this.maxAge}
			const serializedState = JSON.stringify(localState)
			localStorage.setItem(this.stateLocalKey, serializedState)
			
		} catch (error) {
			console.log(error)
		}
	}

	loadState() {
		try {
			const serializedState = localStorage.getItem(this.stateLocalKey)
			if (serializedState === null) return null

			const {value, maxAge} = JSON.parse(serializedState)

			if (Date.now() > maxAge) {
				localStorage.removeItem(this.stateLocalKey)
				return null
			}

			return value

		} catch (error) {
			console.log(error)
		}
	}

	refreshState(){
		localStorage.removeItem(this.stateLocalKey)
	}
}
