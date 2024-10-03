const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');
const createLogs = () => {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs Directory didn\'t exist \nYay!! created it.');
  }
  process.chdir(logsDir);
  for (let i = 0; i <= 9; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `Log file created ${i}`;
    fs.writeFileSync(fileName, fileContent);
    console.log(`${fileName}`);
  }
};
const removeLogs = () => {
    if (fs.existsSync(logsDir)) {
        files = fs.readdirSync(logsDir)
        files.sort((a, b) => {
            const numA = parseInt(a.replace(/[^0-9]/g, '')); 
            const numB = parseInt(b.replace(/[^0-9]/g, ''));
            return numA - numB; 
          });
        console.log('Deleting all the Log files!')
        files.forEach(file => {
        console.log(`Delete files...${file}`);
        fs.unlinkSync(path.join(logsDir, file));
        });
        process.chdir(__dirname);
        fs.rmdirSync(logsDir);
        console.log('Yay!! We Deleted Logs directory.');
    } else {
        console.log('Logs directory didn\t exist, Please create it First! Thank you');
    }
  };
createLogs(); 
removeLogs();  
