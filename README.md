# Testcafe

## What do you need to have?
```bash
1- A text editor like a Visual Studio Code or Sublime or any of your preference
2- Git installed
3- npm installed.  Should a version 6.14.5 or superior
4- node installed. Should a version v12.17.0 or superior
5- Have 2 or more browser installed,  like chrome, firefox, edge, safari, etc
```

## Install Testcafe
```bash
# After clone this project
npm install -g testcafe
# Check the version
testcafe -v
#  version 1.9.4 or superior
```

## To get reporst and videos
```bash
# For videos
npm install --save @ffmpeg-installer/ffmpeg
# For reports
npm install -g testcafe-reporter-html@latest 

```

## This project contains the following folders 
```bash
# helpers folder
- mockData.js: This contains the user input data for our test
- uiMessage.js: This contains UI message basically for login and resets password
- urlEnvironment.js: This contains the URLs LogIn and Edit post
# pages folder
- dashboardPage.js: This contains the selectors elements from dashboard Page
- loginPage.js: This contains the selectors elements from login Page
- postNewPage.js: This contains the selectors elements from creation post Page
- viewNewPostPage.js: This contains the selectors elements from post created Page
# suites folder
- endToEndDemo.js: contains the demo test e2e loging, creations and remove post
- reports folder: inside has the test report in html
- screenshots folder: inside has the evidence of the test run for each test
- Video folder: inside has record of the test run for each test
```

## Run test testcafe
```bash
# List your browser that you have:
testcafe -b
# Run the test suit with a specific browser:
*Go to suite directory in your terminal and do:
testcafe chrome endToEndDemo.js
# Run a specific test:
*Go to suite directory in your terminal and do:
testcafe chrome  endToEndDemo.js -t "Log In user"
# Run a suite test incognito mode:
*Go to suite directory in your terminal and do:
testcafe "chrome -incognito" endToEndDemo.js
# Run a suit test to get a report with 2 browsers:
*Go to suite directory in your terminal and do:
testcafe chrome,firefox: endToEndDemo.js --reporter html:reportes/reporte_end_to_end_demo.html
# Run a suit test to get a report with 1 browsers:
*Go to suite directory in your terminal and do:
testcafe chrome endToEndDemo.js --reporter html:reportes/reporte_end_to_end_demo.html
# Run a suit test with a velocity determinate in an specific test:
*Go to suite directory in your terminal and do:
testcafe chrome endToEndDemo.js -t "TheTestName" --speed 0.1
# Run a test and take screenshot when test fails and in an specific test :
*Go to suite directory in your terminal and do:
testcafe chrome endToEndDemo.js -t "Log In user" --screenshots-on-fails
# Run a suit and take the video:
*Go to suite directory in your terminal and do:
testcafe chrome endToEndDemo.js --video Video
# Run a test and take the video:
testcafe chrome endToEndDemo.js  --video video -t "Log In user"
# Run a suit test with concurrence mode, this case 2 nro concurrence:
testcafe -c 2 chrome endToEndDemo.js
# Run a specific test with concurrence mode, this case 2 nro concurrence:
testcafe -c 2 chrome endToEndDemo.js -t "Log In user"
# Run a suit test with concurrence and incognito mode, this case 2 nro concurrence:
testcafe -c 2 "chrome -incognito" endToEndDemo.js
# Run a suit test remote mode:
testcafe remote endToEndDemo.js
# Run a suit test remote mode but with qr in order the device can read the qr code:
testcafe remote TheTestScript.js --qr-code
# Run a suit test using emulation you can check the "Toogle devide toolbar" of google chrome:
*Go to suite directory in your terminal and do:
testcafe "chrome:emulation:device=iphone X" endToEndDemo.js
testcafe "chrome:emulation:device=Galaxy S5" endToEndDemo.js
testcafe "chrome:emulation:device=iPad" endToEndDemo.js
```





