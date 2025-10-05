import { describeClimb } from './climb';

function app() {
    const climb = {
        name: "El Capitan",
        location: "Yosemite",
        grade: "5.13a",
        height: 900,
        isOutdoor: true
    }
    console.log(describeClimb(climb));
}
