function monthFromString(month){
    switch(month.toLowerCase()){
        case "january":
            return 1;
        case "february":
            return 2;
        case "march":
            return 3;
        case "april":
            return 4;
        case "may":
            return 5;
        case "june":
            return 6;
        case "july":
            return 7;
        case "august":
            return 8;
        case "september":
            return 9;
        case "october":
            return 10;
        case "november":
            return 11;
        case "december":
            return 12;
        default:
            return -1;
    }
}


let bday_elts = document.querySelectorAll("birthday");
bday_elts.forEach(elt => {
    let year = elt.getAttribute("year")
    let month = elt.getAttribute("month")
    let day = elt.getAttribute("day")
    if (isNaN(year) || year==null){
        console.error("Wrong year at element: ", elt)
        return;
    }
    if (month==null||(isNaN(month)&&monthFromString(month)==-1)){
        console.error("Wrong month at element: ", elt)
        return;
    }
    if (isNaN(day) || day==null){
        console.error("Wrong day at element: ", elt)
        return;
    }
    let dob = new Date(Number(year), Number(isNaN(month)?monthFromString(month):Number(month))-1, Number(day))
    let now = new Date(Date.now())
    let showAgeTxt = elt.getAttribute("showage")
    let showAge = (showAgeTxt === "true" || showAgeTxt === "1")
    let showAgeMonthsTxt = elt.getAttribute("showagemonths")
    let showAgeMonths = (showAgeMonthsTxt === "true" || showAgeMonthsTxt === "1")
    
    let customYearText = elt.getAttribute("customyeartext")
    let customMonthText = elt.getAttribute("custommonthtext")
    let customSepText = elt.getAttribute("customseptext")

    if (showAge){
        let yDiff = now.getFullYear() - dob.getFullYear()
        let mDiff = now.getMonth() - dob.getMonth()
        let dDiff = now.getDate() - dob.getDate()
        if (dDiff < 0){
            mDiff--
        }
        if (mDiff < 0){
            yDiff--
            mDiff = mDiff + 12
        }
        elt.textContent = yDiff + customYearText

        if (showAgeMonths){
            elt.textContent += customSepText + mDiff + customMonthText
        }
    }
});