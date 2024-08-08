export const sliceTitle = (title: string) => {
    const desiredLength = 10
    
    if (title.length < desiredLength) return title

    const lastString = title[desiredLength] == ' ' ? desiredLength - 1 : desiredLength

    return `${title.slice(0, lastString)}...`
}
