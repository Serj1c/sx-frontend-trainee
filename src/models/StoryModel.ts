export type StoryModel = {
    id: number
    title: string
    by: string
    score: number
    time: number
    url: string
    descendants: number
    kids: Array<number>
    type: string
}