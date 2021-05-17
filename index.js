console.log(

);
const [mMass, mHeight] = prompt("Mark's Weight, Height").split(',');
const [jMass, jHeight] = prompt("John's Weight, Height").split(',');
const mBMI = mMass / (mHeight ** 2);
const jBMI = jMass / (jHeight ** 2);
const markHigherBMI = mBMI > jBMI;
alert(`Mark has Higher BMI: ${markHigherBMI} 🚗`);