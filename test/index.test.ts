import "../src/index";

describe("let", () => {
    test("works with object", () => {
        const obj = { name: "Daniel", age: 30 };
        obj.let(it => expect(it).toBeInstanceOf(Object));
    });
    test("works with number", () => {
        const number: number = 5;
        number.let(it => expect(typeof it).toBe("number"));
    });
    test("returns value", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.let(it => it.age);
        expect(value).toBe(30);
    });
    test("works with nullable", () => {
        const str: string | null = "Hello world";
        const value = str?.let(it => it.split(" ")[0]);
        expect(value).toBe("Hello");
    });
    test("fails with null", () => {
        const str: string | null = null;
        const value = str?.let(it => it.split(" ")[0]);
        expect(value).toBeUndefined();
    });
    test("fails with undefined", () => {
        const str: string | undefined = undefined;
        const value = str?.let(it => it.split(" ")[0]);
        expect(value).toBeUndefined();
    });
});

describe("also", () => {
    test("works with object", () => {
        const obj = { name: "Daniel", age: 30 };
        obj.also(it => expect(it).toBeInstanceOf(Object));
    });
    test("works with number", () => {
        const number = 5;
        number.also(it => expect(typeof it).toBe("number"));
    });
    test("returns instance", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.also(it => it.name);
        expect(value).toBe(obj);
    });
    test("modifies value", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.also(it => it.age = 40);
        expect(value).toBe(obj);
        expect(value.age).toBe(40);
    });
    test("works with nullable", () => {
        const obj: object | null = { name: "Daniel", age: 30 };
        const value = obj?.also(it => it["age"] = 40);
        expect(value).toBe(obj);
        expect(value?.["age"]).toBe(40);
    });
    test("fails with null", () => {
        const obj: object | null = null;
        const value = obj?.also(it => it["age"] = 40);
        expect(value).toBeUndefined();
    });
    test("fails with undefined", () => {
        const obj: object | undefined = undefined;
        const value = obj?.also(it => it["age"] = 40);
        expect(value).toBeUndefined();
    });
    test("retains with null", () => {
        const str: string | null = null;
        const obj = { name: "Daniel", age: 30 };
        str?.also(it => obj.name = it);
        expect(obj.name).toBe("Daniel");
    });
});

describe("run", () => {
    test("works with object", () => {
        const obj = { name: "Daniel", age: 30 };
        obj.run(function() {
            expect(this).toBeInstanceOf(Object);
        });
    });
    test("works with number", () => {
        const number = 5;
        number.run(function() {
            expect(typeof this).toBe("number");
        });
    });
    test("returns value", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.run(function() {
            return this.age;
        });
        expect(value).toBe(30);
    });
    test("works with nullable", () => {
        const str: string | null = "Hello world";
        const value = str?.run(function() {
            return this.split(" ")[0];
        });
        expect(value).toBe("Hello");
    });
    test("fails with null", () => {
        const str: string | null = null;
        const value = str?.run(function() {
            return this.split(" ")[0];
        });
        expect(value).toBeUndefined();
    });
    test("fails with undefined", () => {
        const str: string | undefined = undefined;
        const value = str?.run(function() {
            return this.split(" ")[0];
        });
        expect(value).toBeUndefined();
    });
});

describe("apply", () => {
    test("works with object", () => {
        const obj = { name: "Daniel", age: 30 };
        obj.apply(function() {
            expect(this).toBeInstanceOf(Object);
        });
    });
    test("works with number", () => {
        const number = 5;
        number.apply(function() {
            expect(typeof this).toBe("number");
        });
    });
    test("returns instance", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.apply(function() {
            return this.name;
        });
        expect(value).toBe(obj);
    });
    test("modifies value", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.apply(function() {
            this.age = 40;
        });
        expect(value).toBe(obj);
        expect(value.age).toBe(40);
    });
    test("works with nullable", () => {
        const obj: object | null = { name: "Daniel", age: 30 };
        const value = obj?.apply(function() {
            this["age"] = 40;
        });
        expect(value).toBe(obj);
        expect(value?.["age"]).toBe(40);
    });
    test("fails with null", () => {
        const obj: object | null = null;
        const value = obj?.apply(function() {
            this["age"] = 40;
        });
        expect(value).toBeUndefined();
    });
    test("fails with undefined", () => {
        const obj: object | null = null;
        const value = obj?.apply(function() {
            this["age"] = 40;
        });
        expect(value).toBeUndefined();
    });
    test("retains with null", () => {
        const str: string | null = null;
        const obj = { name: "Daniel", age: 30 };
        str?.apply(function() {
            obj.name = this;
        });
        expect(obj.name).toBe("Daniel");
    });
});
