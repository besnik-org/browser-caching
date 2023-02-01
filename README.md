## Smart Localstorage Manager 

If you work with local storage for caching data to client side, you feel to set expire date for data. 
This small library will help you to solve your problem. 

You just use:

### setLocalStorage():
This function has three parameters:
1. ```key``` for storing data with the key
```javascript
import { setLocalStorage, getLocalStorage } from "index.js";

setLocalStorage('flowgiri', 'flowgiri.com', 5)
```

2. ```value```

