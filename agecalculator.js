document.addEventListener("DOMContentLoaded", function () {
    let dateInput = document.getElementById('dateInput');
    let monthInput = document.getElementById('monthInput');
    let yearInput = document.getElementById('yearInput');
    let submitBtn = document.querySelector('.submit-btn');
    let otherResultBox = document.querySelector('.other-results');

    const result = () => {
        let d1 = parseInt(dateInput.value) || 0;
        let m1 = parseInt(monthInput.value) || 0;
        let y1 = parseInt(yearInput.value) || 0;

        let date = new Date();
        let d2 = date.getDate();
        let m2 = date.getMonth() + 1;
        let y2 = date.getFullYear();

        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;

        document.querySelector('.result .result-days div').textContent = d;
        document.querySelector('.result .result-month div').textContent = m;
        document.querySelector('.result .result-years div').textContent = y;

        getOtherResults();
    }

    const getOtherResults = () => {
        let day = parseInt(dateInput.value) || 0;
        let month = parseInt(monthInput.value) - 1 || 0;
        let year = parseInt(yearInput.value) || 0;

        const birthday = new Date(year, month, day).getTime();
        const comparisonTimeStamp = new Date().getTime();
        const difference = comparisonTimeStamp - birthday;
        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30.4375);
        const years = Math.floor(days / 365.25);

        let tableHtml = `<table>
            <tr>
                <td>Months Old</td>
                <td>${months.toLocaleString("en-US")}</td>
            </tr>
            <tr>
                <td>Weeks Old</td>
                <td>${weeks.toLocaleString("en-US")}</td>
            </tr>
            <tr>
                <td>Days Old</td>
                <td>${days.toLocaleString("en-US")}</td>
            </tr>
            <tr>
                <td>Hours Old (approx)</td>
                <td>${hours.toLocaleString("en-US")}</td>
            </tr>
            <tr>
                <td>Minutes Old (approx)</td>
                <td>${minutes.toLocaleString("en-US")}</td>
            </tr>
            <tr>
                <td>Seconds Old (approx)</td>
                <td>${seconds.toLocaleString("en-US")}</td>
            </tr>
        </table>`;

        otherResultBox.innerHTML = tableHtml;
    }

    submitBtn.addEventListener('click', () => {
        if (dateInput.value != '' && monthInput.value != '' && yearInput.value != '') {
            result();
        }
    });

    result();
});
