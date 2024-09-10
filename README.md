# ios-react-timer
ios style time picker for React app.

<img src="https://github.com/user-attachments/assets/6a062b91-bc40-4772-b1bb-20cd7d486ba3" alt="ios-react-timer" width="400"/>

 
## install

```
npm i ios-react-time-picker
```
 
## how to use

```js
import React, { useState } from 'react';
import { TimePicker } from 'ios-react-time-picker';

export default const  MyApp = () => {
   const [value, setValue] = useState('10:00');

   const onChange = (timeValue) => {
      setValue(timeValue);
   }

   return (
      <div>
         <TimePicker value={value} onChange={onChange} hourType={12} minType={1} />
      </div>
   );
}
```
 
## API

| Name      | Type                                          | Default | Description                                                                  |
|-----------|-----------------------------------------------|---------|------------------------------------------------------------------------------|
| `value`   | `string`                                      | N/A     | The current selected time in string format.                                  |
| `onChange`| `Dispatch<SetStateAction<string>>`            | N/A     | Function called when the time value changes.                                 |
| `hourType`| `12 \| 24`                                    | `24`    | Determines whether to use a 12-hour or 24-hour format for the time display.  |
| `minType` | `1 \| 5 \| 10`                                | `1`     | Interval for minutes, allowing 1, 5, or 10-minute increments.                |

   
## License

The MIT License.
