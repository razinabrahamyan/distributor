export const truncateText = (item, length = 50) => {
    return item.expanded ? item.name : (item.name.slice(0, length) + (item.name.length > length ? '...' : ''))
}
export const hasMore = (text, length = 50) => {
    return text.length > length
}