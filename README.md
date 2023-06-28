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
Download birthday.js [here](https://raw.githubusercontent.com/LinUwUxCat/birthday.js/main/birthday.js) and put it next to your HTML file, then at the end of said file, include the following : 
```html
<script src="birthday.js"></script>
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
| bdayfunction | The name of a function that will be executed on the birthday. | `myBdayFunction` | This function must be in the `window` scope (see example below) | |


## Example
Here is an example using custom text attributes:
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
And here is an example of a custom function, paired with [tsParticles](https://github.com/matteobruni/tsparticles). This will make confetti appear on october 7.
```html
<birthday 
    year="2004" 
    month="october" 
    day="7" 
    showage="true" 
    customyeartext="yo"
    bdayfunction="myBdayFunction"
/>
<script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.10.1/tsparticles.confetti.bundle.min.js"></script>
<script>
    function myBdayFunction(){
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    }
</script>
<script src="birthday.js"></script>
```