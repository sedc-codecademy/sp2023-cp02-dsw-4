export function formatNumberWithSpaces(input) {
    const value = input.replace(/\D/g, '')
    const formattedValue = value.replace(/(.{4})/g, '$1 ')
    return formattedValue.trim()
}

export function formatAsMMYY(date) {
    const value = date.replace(/\D/g, '')

    const matches = value.match(/^(\d{1,2})(\d{0,2})$/)

    if (!matches) {
        return value.slice(0, -1)
    }

    // eslint-disable-next-line
    let [_, month, year] = matches

    if (year) {
        if (value.length === 3) {
            if (year !== '2') {
                return value.slice(0, -1)
            }
        } else if (value.length === 4) {
            const secondYearDigit = parseInt(year[1], 10);
            if (secondYearDigit < 4 || secondYearDigit > 9) {
                return month + (year ? '/' + year : '').slice(0, -1)
            }
        }
    }

    if (month && value.length >= 2) {
        month = parseInt(month, 10)
        if (month < 1 || month > 12) {
            return value.slice(0, -1)
        }
        month = month.toString().padStart(2, '0')
    }

    return month + (year ? '/' + year : '')
}

export const maskCardNumber = (number, mask) => {
    let maskedNumber = ""
    let j = 0

    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === "0") {
            maskedNumber += number[j] || "X";
            j++
        } else {
            maskedNumber += mask[i]
        }
    }

    return maskedNumber
}