function getEquivalent(c) {
    switch (c) {
        case 'á':
            return "&aacute;";

        case 'Á':
            return "&Aacute;";

        case 'é':
            return "&eacute;";

        case 'É':
            return "&Eacute;";

        case 'í':
            return "&iacute;";

        case 'Í':
            return "&Iacute;";

        case 'ó':
            return "&oacute;";

        case 'Ó':
            return "&Oacute;";

        case 'ú':
            return "&uacute;";

        case 'Ú':
            return "&Uacute;";

        case 'ñ':
            return "&ntilde;";

        case 'Ñ':
            return "&Ntilde;";

        case String.fromCharCode(161): // ¡
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
