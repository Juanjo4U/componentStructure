const isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//// Validation Functions
const validateNotEmpty = value => value != '';

const validateMinValue = (value, minValue) => !validateNotEmpty(value) || (value > minValue);

const validateMaxValue = (value, maxValue) => !validateNotEmpty(value) || (value < maxValue);

const validateMinLength = (value, minLength) => !validateNotEmpty(value) || (value.length > minLength);

const validateMaxLength = (value, maxLength) => !validateNotEmpty(value) || (value.length < maxLength);

const validateNumber = value => !isNaN(value) && !(value % 1);

const validateFloat = value => !isNaN(value) && !!(value % 1);

export const validateEmail = value => isEmail.test(String(value).toLowerCase());

const validatePassword = value => !validateNotEmpty(value) || (validateMinLength(value, 4));

const validateMinDate = (value, minDate) => value > minDate;

const validateMaxDate = (value, maxDate) => value < maxDate;

const validateCompare = (value1, value2) => value1 == value2;

const validateDate = value => {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value))
        return false;

    // Parse the date parts to integers
    var parts = value.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}



// Type Validation

const validateType = (value, type) => {
    if (!validateNotEmpty(value))
        return true;
    switch (type) {
        case 'email':
            return validateEmail(value);
        case 'number':
            return validateNumber(value);
        case 'float':
            return validateFloat(value);
        case 'password':
            return validatePassword(value);
        case 'date':
            return validateDate(value);

    }
}

// requirements Validation

export const generateValidator = (value, obj = {}) => {
    let status = true;
    Object.keys(obj).map(key => {
        switch (key) {
            case 'required':
                status &= validateNotEmpty(value) || !obj[key];
                break;
            case 'minValue':
                status &= validateMinValue(value, obj[key]);
                break;
            case 'maxValue':
                status &= validateMaxValue(value, obj[key]);
                break;
            case 'minLength':
                status &= validateMinLength(value, obj[key]);
                break;
            case 'maxLength':
                status &= validateMaxLength(value, obj[key]);
                break;
            case 'type':
                status &= validateType(value, obj[key]);
                break;

            case 'minDate':
                status &= validateMinDate(value, obj[key]);
                break;
            case 'maxDate':
                status &= validateMaxDate(value, obj[key]);
                break;
            case 'compare':
                status &= validateCompare(value, obj[key]);
                break;
        }
    });
    return status;
}
