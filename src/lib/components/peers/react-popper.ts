let Manager = undefined;
let Reference = undefined;
let Popper = undefined;

try {
    var PopperLib = require('react-popper');
    Manager = PopperLib.Manager;
    Reference = PopperLib.Reference;
    Popper = PopperLib.Popper;
} catch {

}

export { Manager, Reference, Popper };