# birthday.js
## Usage
Include a `<birthday>` tag like the following:
```html
<birthday 
    year="2004" 
    month="may" 
    day="29" 
    showage="true"
/>
```
Then, at the end of your file, include the following : 
```html
<script src="https://raw.githubusercontent.com/LinUwUxCat/birthday.js/main/birthday.js"></script>
```
## Attributes
In addition to the above example, a few different attributes exist. Here is the complete list:
| Attribute | Description | Example value | Notes | required |
|-----------|-------------|---------------|-------|----------|
| year      | The year of birth | `2004` | Any date is the future is also supported | :heavy_check_mark: |
| month     | The month of birth | `10` or `october` | Only english months names are supported | :heavy_check_mark: |
| day       | The day of birth | `7` | The date must be valid (e.g. Feb 31 won't work) | :heavy_check_mark: |
| showage | Whether to show the age in years only or not | `true` or `false` | Anything other than true or 1 is false | | 
| showagemonths | Whether to show the age in years and months | `true` or `false` | Anything other than true or 1 is false. This will have no effect if `showage` is false | |
| customyeartext | Text to show next to the years of age | `years` | This will have no effect if `showage` is false | |
| custommonthtext | Text to show next to the months of age | `month` | This will have no effect if `showagemonths` is false | |
| customseptext | Text to show between the years and months | `and` | This will have no effect if `showagemonths` is false | |

## Example
Here is an example using all attributes:
```html
 <birthday 
    year="2004" 
    month="october" 
    day="7" 
    showage="true" 
    showagemonths="true"
    customyeartext=" years"
    custommonthtext=" months"
    customseptext=" and "
/>
```