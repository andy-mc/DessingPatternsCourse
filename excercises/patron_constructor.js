'use strict';

class MiClass {
    // prototype space
    constructor() {
        // constructor space
        this.prop1 = 1
        this.method_inside = () => {
            console.log('this:', this)
            console.log('method')
            return 'method with this'
        }
    }
    // prototype space
    method_outside_construct() {
        console.log('this:', this)
        console.log('method_outside_construct:')
        return 'method_outside_construct'
    }
}

const instance1 = new MiClass()
console.log('instance1:', instance1)
console.log('instance1:', instance1.method_inside())
console.log('method_outside_construct:', instance1.method_outside_construct())

console.log('\n\n')

const instance2 = new MiClass()
console.log('instance2:', instance2)
console.log('instance2:', instance2.method_inside())
console.log('method_outside_construct:', instance2.method_outside_construct())
