export const range = (upto: number, startFrom: number = 0): Array<number> => {
    return Array.from({ length: upto - startFrom }, (_, i) => i + startFrom)
}