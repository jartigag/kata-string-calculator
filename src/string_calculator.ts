export default class StringCalculator {
    add(strInput: string): number {
        const [separator, strNumbers] = this.extractNumbersAndSeparator(strInput)
        let numbers = strNumbers.replace('\n',separator).split(separator).map(Number)
        return numbers.reduce((a, b) => a+b)
    }

    extractNumbersAndSeparator(strInput: string): string[] {
        let separator = ','
        const separatorIndicator = strInput.substring(0,2)
        if (separatorIndicator=='//') {
            separator = strInput.substr(2).substr(0, strInput.indexOf('\n')-2)
        }
        if (separatorIndicator=='//') { strInput = strInput.substr(2) }
        return Array(separator, strInput)
    }
}
