export const toKebab = (string) => (
    string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase()
);
window.toKebab = toKebab;

export const toSentence = (string) => (
    string.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[\s\-_]+/g, " ").toLowerCase()
        .split(" ").map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(" ")
);
