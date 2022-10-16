console.log('one');
let ww = process.env.NODE_ENV.trim.toLowerCase();
if (ww === 'production') {
  console.log('Another one');
  console.log('              test');
}
console.log('one');
if (ww === 'production') {
  console.log('Another one');
} else {
  console.log('test');
}
