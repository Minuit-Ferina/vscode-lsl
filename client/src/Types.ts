import {Directory} from './providers/common';

export const Types = new Directory([
    {
        "name": "integer",
        "description": "The integer data type is a signed 32 bit value between −2,147,483,648 and +2,147,483,647 (that is 0x80000000 to 0x7FFFFFFF in hex). Integers are whole numbers. The fractional datatype is the float.\n\nDEBUG_CHANNEL can be used as a constant for the maximum integer (for that is the value it is defined as).",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Category:LSL_Integer",
	},

    {
        "name": "float",
        "description": "he LSL \"float\" type is a \"Wikipedia logo\" floating point data type that uses 32 bit in \"Wikipedia logo\" IEEE-754 form. If a number is written with a decimal point in LSL, then it is taken to be a float.\n\nThe valid range is 1.401298464E-45 to 3.402823466E+38\n\nFloats can be specified in scientific notation such as 2.6E-5.\n\nIf a function requires a float as a parameter, and the number is an integer (e.g. 5), you can add the .0 to clearly indicate it's a float, but omitting the .0 is equally valid and actually saves bytecode space in the compiled code.\n\nWhen dividing 2 constants, defining them as floats will avoid the chance of unwanted rounding down. Better still, do the math on your calculator and save the server some cycles.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Category:LSL_Float",
	},

    {
        "name": "key",
        "description": "A key is a universal unique identifier in Second Life for anything mostly, be it a prim, avatar, texture, etc.\n\nYou may see key referred to as UUID, UID, \"Asset UUID\", or \"asset-ID\".\n\nThe key itself is formed of \"Wikipedia logo\" hexadecimal characters [0-9a-f] and each section of the key is broken up by dashes (for a total amount of 36 characters).",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Category:LSL_Key",
	},

    {
        "name": "list",
        "description": "A list is a special kind of data type which can contain zero or more elements of any of the other data types recognised in LSL.\n\nLists are signified by square brackets surrounding their elements; the elements inside are separated by commas.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Category:LSL_List",
	},

    {
        "name": "rotation",
        "description": "A rotation is a data type that contains a set of four float vlaues.\n\nEach element can be accessed individually by appending .x, .y, .z, or .s to the variable name.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Rotation",
	},

    {
        "name": "string",
        "description": "A string is text data.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Category:LSL_String",
	},

    {
        "name": "vector",
        "description": "A vector is a data type that contains a set of three float values.\n\nEach element can be accessed individually by appending .x, .y, or .z to the variable name.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Category:LSL_Vector",
	}
]);