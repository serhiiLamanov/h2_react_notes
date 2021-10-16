export default function findDates(str){
    const dateRegExpr = /(?<!\d)(?<day>[0-3]?\d)\/(?<month>[01]?\d)\/(?<year>\d{4})(?!\d)/g
    const res = [];
    for(const match of str.matchAll(dateRegExpr)){
        const {year, month, day} = match.groups
        if(!isNaN(Date.parse(year+'-'+month+'-'+day)))
            res.push(match[0])
    }
    return res.join(", ")
}