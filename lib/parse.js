function getEquivalent(c) {
    const int_value = c.charCodeAt(0);
    return (int_value <= 127) ? c : `&#${int_value};`;
}

const minify = (str) => {
    final_str = "";
    for (const c of str) final_str += getEquivalent(c);
    return final_str;
};

module.exports = minify;
