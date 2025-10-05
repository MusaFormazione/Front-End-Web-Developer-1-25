var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function aggiungiComputer(computer, computerList) {
    return __spreadArray(__spreadArray([], computerList, true), [computer], false);
}
var mioComputer = {
    marca: "Dell",
    modello: "XPS 13",
    sistemaOperativo: "Windows",
    ramGB: 16,
    haSSD: true
};
var inventarioComputer = [];
inventarioComputer = aggiungiComputer(mioComputer, inventarioComputer);
console.log("Inventario Computer:", inventarioComputer);
