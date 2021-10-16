export default class StringCalculator {
    Add(strNumbers: string): number {
        const separatorIndicator = strNumbers.substring(0,2)
        if (separatorIndicator=='//') {
            const separator = strNumbers.substr(2).substr(0, strNumbers.indexOf('\n')-2)
            let numbers = strNumbers.replace(separatorIndicator,'').replace('\n',separator).split(separator).map(Number)
            return numbers.reduce((a, b) => a+b)
        } else {
            let numbers = strNumbers.replace('\n',',').split(',').map(Number)
            return numbers.reduce((a, b) => a+b)
        }
    }
}
