export interface IEvent {
    id: number
    name: String
    date: Date
    time: String
    price: number
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    }
    onlineUrl?: string
    sessions: ISession[]
}

export interface ISession {
    id: number
    name: String
    presenter: string
    duration: number
    level: string
    abstract: string 
    voters: string[]
}