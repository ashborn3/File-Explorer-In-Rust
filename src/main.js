const totalSpace = 16; // Total disk space in GB
const usedSpace = 5.9; // Used disk space in GB

// Calculate stroke dash array
const strokeDashArray = `${(usedSpace / totalSpace) * 360} 360`;

// Apply stroke dash array to the meter element
document.querySelector('.meter').style.strokeDasharray = strokeDashArray;

// Update used space text
document.getElementById("usedSpace").textContent = usedSpace + " GB";
document.getElementById("freeSpace").textContent = (totalSpace - usedSpace) + " GB";

// Calculate and display storage percentage in the circle
const storagePercentage = Math.round((usedSpace / totalSpace) * 100);
document.querySelector('text').textContent = storagePercentage + '%';