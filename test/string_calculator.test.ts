import StringCalculator from '../src/string_calculator'

describe('Calculator', () => {
    const calculator = new StringCalculator()

    it('empty string returns 0', () => {
        expect(calculator.Add('')).toEqual(0)
    })

    it('"1" returns 1', () => {
        expect(calculator.Add("1")).toEqual(1)
    })

    it('"1,2" returns 3', () => {
        expect(calculator.Add("1,2")).toEqual(3)
    })
})
