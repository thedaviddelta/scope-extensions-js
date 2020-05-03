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
    interface Number {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<R>(this: Number | null | undefined, block: (it: number) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also(this: Number | null | undefined, block: (it: number) => void): number;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<R>(this: Number | null | undefined, block: (this: number) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply(this: Number | null | undefined, block: (this: number) => void): number;
    }
    interface String {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<R>(this: String | null | undefined, block: (it: string) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also(this: String | null | undefined, block: (it: string) => void): string;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<R>(this: String | null | undefined, block: (this: string) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply(this: String | null | undefined, block: (this: string) => void): string;
    }
    interface Boolean {
        /**
         * Calls the specified function block with `this` value as its argument and returns its result
         * @param block - The function to be executed with `this` as argument
         * @returns `block`'s result
         */
        let<R>(this: Boolean | null | undefined, block: (it: boolean) => R): R;
        /**
         * Calls the specified function block with `this` value as its argument and returns `this` value
         * @param block - The function to be executed with `this` as argument
         * @returns `this`
         */
        also(this: Boolean | null | undefined, block: (it: boolean) => void): boolean;
        /**
         * Calls the specified function block with `this` value as its receiver and returns its value
         * @param block - The function to be executed with `this` as context
         * @returns `block`'s result
         */
        run<R>(this: Boolean | null | undefined, block: (this: boolean) => R): R;
        /**
         * Calls the specified function block with `this` value as its receiver and returns `this` value
         * @param block - The function to be executed with `this` as context
         * @returns `this`
         */
        apply(this: Boolean | null | undefined, block: (this: boolean) => void): boolean;
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

Number.prototype.let = function(this, block) {
    return block(Number(this!));
}

Number.prototype.also = function(this, block) {
    block(Number(this!));
    return Number(this!);
}

Number.prototype.run = function(this, block) {
    return block.call(Number(this!));
}

Number.prototype.apply = function(this, block) {
    block.call(Number(this!));
    return Number(this!);
}

String.prototype.let = function(this, block) {
    return block(String(this!));
}

String.prototype.also = function(this, block) {
    block(String(this!));
    return String(this!);
}

String.prototype.run = function(this, block) {
    return block.call(String(this!));
}

String.prototype.apply = function(this, block) {
    block.call(String(this!));
    return String(this!);
}

Boolean.prototype.let = function(this, block) {
    return block(Boolean(this!));
}

Boolean.prototype.also = function(this, block) {
    block(Boolean(this!));
    return Boolean(this!);
}

Boolean.prototype.run = function(this, block) {
    return block.call(Boolean(this!));
}

Boolean.prototype.apply = function(this, block) {
    block.call(Boolean(this!));
    return Boolean(this!);
}
