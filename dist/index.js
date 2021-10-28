"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main = () => {
    let a = { k1: 'v1', k2: 'v2' };
    var b = Object.assign({}, a, { k3: 'v3' });
    console.log(b);
    const app = (0, express_1.default)();
    for (const i of a) {
        console.log(i);
    }
    app.get('/', (_, res) => {
        res.json({ status: 'success' });
    });
    app.listen(8000, () => {
        console.log('server is listening at http://localhost:8000');
    });
};
main();
//# sourceMappingURL=index.js.map