export interface ICreateEvent{
    name: string,
    eventOrganizer: string,
    imageId: number,
    startDate: Date,
    endDate: Date,
    startTime: string,
    endTime: string
    city: string,
    address: string,
    description: string,
    availableSeat: number,
    price: number
    categoryId: number,
}