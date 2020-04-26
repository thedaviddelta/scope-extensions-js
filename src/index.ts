export {};

declare global {
    interface Object {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<T, R>(this: T | null | undefined, block: (it: T) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also<T>(this: T | null | undefined, block: (it: T) => void): T;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<T, R>(this: T | null | undefined, block: (this: T) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply<T>(this: T | null | undefined, block: (this: T) => void): T;
    }
}

Object.prototype.let = function(this, block) {
    return block(this!);
}

Object.prototype.also = function(this, block) {
    block(this!);
    return this!;
}

Object.prototype.run = function(this, block) {
    return block.call(this!);
}

Object.prototype.apply = function(this, block) {
    block.call(this!);
    return this!;
}
