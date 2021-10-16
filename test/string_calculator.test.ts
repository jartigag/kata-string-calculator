import StringCalculator from '../src/string_calculator'

describe('Calculator', () => {
    const calculator = new StringCalculator()

    it('should return 0 if an empty string is passed to Add', () => {
        expect(calculator.Add('')).toEqual(0)
    })

    it('should return 1 if "1" is passed to Add', () => {
        expect(calculator.Add("1")).toEqual(1)
    })

    it('should return 3 if "1,2" is passed to Add', () => {
        expect(calculator.Add("1,2")).toEqual(3)
    })

    it('should return 6 if "1,2,3" is passed to Add', () => {
        expect(calculator.Add("1,2,3")).toEqual(6)
    })
})
