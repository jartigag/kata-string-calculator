export default class StringCalculator {
    Add(strNumbers: string): number {
        let numbers = strNumbers.split(',').map(Number)
        return numbers.reduce((a, b) => a+b)
    }
}
