## BrowserCaching with Localstorage  

If you work with local storage for caching data to client side, you feel to set expire date for data. 
This small library will help you to solve your problem. 

### Install

```shell
npm i browser-caching
```

You just use:

### setBrowserCache():
This function has three parameters:

1. ```key``` for storing data with the key
```javascript
import { setLocalStorage, getLocalStorage } from "browser-caching";

setLocalStorage('flowgiri', 'flowgiri.com', 5)
```

2. ```value```
  Any type of data you need to store. 
  
 Note: `No need to make stringify of array or object.` 

3. ```expireInMinute``` (optional). You can pass minutes for caching data till the minutes.
If you do not pass expire, data will store like default ```localStorage```.


### getBrowserCache():
This function will get your data as like as you store if expire is not over. 
If expire over then return null.
