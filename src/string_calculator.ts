export default class StringCalculator {
    Add(strNumbers: string): number {
        let numbers = strNumbers.split(',').map(Number)

        if (isNaN(numbers[0])) numbers = [0]

        return numbers.reduce((a, b) => a+b)
    }
}
