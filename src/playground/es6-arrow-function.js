const square = function (x) {
    return x*x;
}

console.log(square(9))

const squareArrow = (x) => {
    return x*x;
}

//is equivelant to  

const squareArrow1 = (x) => x * x;

const user = {
    name:'Andrew',
    cities: ['Netanya','New York','Haifa'],
    printPlaces: function() {
        this.cities.forEach((city) => {
            console.log(this.name +' has lived in '+ city)
        });
    }
};

user.printPlaces();

console.log(squareArrow(9))


const user2 = {
    name:'Andrew',
    cities: ['Netanya','New York','Haifa'],
    printPlaces: function() {
        const cityMessages=this.cities.map((city) => {
           return city + '!';
        });
        return cityMessages;
    }
};

console.log(user2.printPlaces());