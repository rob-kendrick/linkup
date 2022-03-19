/* eslint-disable camelcase */
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));

const app = (0, express_1.default)();
app.get('/', (req, res) => {
  res.send('😇😇😇😇😇');
});
app.listen(4000, () => {
  console.log('🚀🚀The application is listening on port localhost 4000!🚀🚀🚀');
});
