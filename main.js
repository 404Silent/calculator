function calculateTime() {
    const desiredPower = parseFloat(document.getElementById('desiredPower').value);
    const desiredPowerUnit = parseInt(document.getElementById('desiredPowerUnit').value);
    const currentPower = parseFloat(document.getElementById('currentPower').value);
    const currentPowerUnit = parseInt(document.getElementById('currentPowerUnit').value);
    const tickRate = parseFloat(document.getElementById('tickRate').value);
    const tickRateUnit = parseInt(document.getElementById('tickRateUnit').value);
  
    const timeInSeconds = ((desiredPower * Math.pow(1000, desiredPowerUnit)) - (currentPower * Math.pow(1000, currentPowerUnit))) / (tickRate * Math.pow(1000, tickRateUnit));
  
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.ceil(timeInSeconds % 60);
  
    document.getElementById('result').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }