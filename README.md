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
 
## Example

| 12-hour      | 24-hour      |
|--------------|--------------|
| ![12hour demo](https://github.com/user-attachments/assets/bc853a99-6473-4d52-8d4a-beaf0d9ef025) | ![24hour demo](https://github.com/user-attachments/assets/5d7f234c-7ddd-4509-95f6-5105de7af567)      |

| 1-minutes      | 5-minutes      | 10-minutes     |
|----------------|----------------|----------------|
| ![1minutes demo](https://github.com/user-attachments/assets/75634664-631d-48fa-8fc1-8362c6c02fac) | ![5minutes demo](https://github.com/user-attachments/assets/d3368545-46e1-43fe-adcc-bc0c8b70cbe0) | ![10minutes demo](https://github.com/user-attachments/assets/dc9a1146-a7fa-43cf-b037-35a4cf2de925)     |

 
## API

| Name      | Type                                          | Default | Description                                                                  |
|-----------|-----------------------------------------------|---------|------------------------------------------------------------------------------|
| `value`   | `string`                                      | N/A     | The current selected time in string format.                                  |
| `onChange`| `Dispatch<SetStateAction<string>>`            | N/A     | Function called when the time value changes.                                 |
| `hourType`| `12 \| 24`                                    | `24`    | Determines whether to use a 12-hour or 24-hour format for the time display.  |
| `minType` | `1 \| 5 \| 10`                                | `1`     | Interval for minutes, allowing 1, 5, or 10-minute increments.                |

   
## License

The MIT License.
