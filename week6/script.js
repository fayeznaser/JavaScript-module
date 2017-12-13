class Movies {
    set newStar(starb) {
        this.star.push(starb);
    }
    set newDirector(XDirector) {
        this.director.push(XDirector);
    }
    set newRating(Ratings) {
        this.rating.push(Ratings)
    }
    set newWriter(Writers) {
        this.writer.push(Writers);
    }
    constructor(title) {
        this.title = title;
        this.director = [];
        this.star = [];
        this.writer = [];
        this.rating = [];
    }

    getTitle() {
        return this.title
    }

    getStars() {
        return this.star
    }
    getWrites() {
        return this.writer
    }
    getDirector() {
        return this.director
    }
    getRating() {
        let rate = 0;
        for (let i = 0; i < this.rating.length; i++) {
            rate += this.rating[i]
        }
        return rate / this.rating.length
    }
}
class Staff {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    getName() {
        return this.name
    }
    getRole() {
        return this.role
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth.getFullYear();
    }

}




const bright = new Movies('Bright');


const ayer = new Staff("David Ayer", "director", "1968/01/18");
const landis = new Staff("Max Landis", "writer", "1985/08/03");
const smith = new Staff("Will Smith", "star", "1968/08/25");
const sanchez = new Staff("Isabella Sanchez", "star", "1984/02/09");
bright.newStar = smith
bright.newStar = sanchez
bright.newWriter = landis
bright.newDirector = ayer
bright.newRating = 8
bright.newRating = 7
bright.newRating = 8.5
bright.newRating = 6.75
console.log(bright);
console.log(bright.getRating());
console.log(smith.getAge());