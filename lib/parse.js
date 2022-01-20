function getEquivalent(c) {
    switch (c) {
        case '�':
            return "&aacute;";

        case '�':
            return "&Aacute;";

        case '�':
            return "&eacute;";

        case '�':
            return "&Eacute;";

        case '�':
            return "&iacute;";

        case '�':
            return "&Iacute;";

        case '�':
            return "&oacute;";

        case '�':
            return "&Oacute;";

        case '�':
            return "&uacute;";

        case '�':
            return "&Uacute;";

        case '�':
            return "&ntilde;";

        case '�':
            return "&Ntilde;";

        case String.fromCharCode(161): // �
            return "&#161;";

        default:
            //process.stdout.write(c + '[' + c.charCodeAt(0) + ']');
            return c;
    }
}

const minify = (str) => {
    final_str = "";
    for (const c of str) final_str += getEquivalent(c);
    return final_str;
};

module.exports = minify;
