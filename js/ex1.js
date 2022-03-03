class Square {
    constructor(sideS) {
        this.side = sideS;
    }
    perimeter() {
        return this.side * 4;
    }
    area() {
        return this.side ** 2;
    }
    diagonal() {
        return Math.sqrt(2 * this.side ** 2);
    }
}

const ws1 = new Square(2);
console.log(`Square with side ${ws1.side} has perimeter of ${ws1.perimeter()}, area of ${ws1.area()}, and diagonal of ${ws1.diagonal()}`);

const ws2 = new Square(3);
console.log(`Square with side ${ws2.side} has perimeter of ${ws2.perimeter()}, area of ${ws2.area()}, and diagonal of ${ws2.diagonal()}`);

const ws3 = new Square(4);
console.log(`Square with side ${ws3.side} has perimeter of ${ws3.perimeter()}, area of ${ws3.area()}, and diagonal of ${ws3.diagonal()}`);