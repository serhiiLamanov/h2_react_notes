export default function formatISOStringDate(ISOStringDate){
    const DATE_OPTIONS = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    return new Date(ISOStringDate).toLocaleDateString('en-US', DATE_OPTIONS)
}