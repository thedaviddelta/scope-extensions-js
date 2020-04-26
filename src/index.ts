export {};

declare global {
    interface Object {
        let<T, R>(this: T | null | undefined, block: (it: T) => R): R;
        also<T>(this: T | null | undefined, block: (it: T) => void): T;
        run<T, R>(this: T | null | undefined, block: (this: T) => R): R;
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
