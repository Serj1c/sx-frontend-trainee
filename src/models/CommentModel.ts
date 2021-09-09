export type CommentModel = {
    by: string
    id: number
    kids: Array<number> | null
    parent: number
    text: string
    time: number
    type: string
}