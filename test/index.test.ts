import "../src/index";

describe("let", () => {
    test("works with object", () => {
        const obj = { name: "Daniel", age: 30 };
        obj.let(it => expect(it).toBeInstanceOf(Object));
    });
    test("works with number", () => {
        const number = 5;
        number.let(it => expect(typeof it).toBe("number"));
        number.let(it => expect(it).toBe(number));
    });
    test("works with string", () => {
        const string = "Hello world";
        string.let(it => expect(typeof it).toBe("string"));
        string.let(it => expect(it).toBe(string));
    });
    test("works with boolean", () => {
        const boolean = true;
        boolean.let(it => expect(typeof it).toBe("boolean"));
        boolean.let(it => expect(it).toBe(boolean));
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
        number.also(it => expect(it).toBe(number));
    });
    test("works with string", () => {
        const string = "Hello world";
        string.also(it => expect(typeof it).toBe("string"));
        string.also(it => expect(it).toBe(string));
    });
    test("works with boolean", () => {
        const boolean = true;
        boolean.also(it => expect(typeof it).toBe("boolean"));
        boolean.also(it => expect(it).toBe(boolean));
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
        number.run(function() {
            expect(this).toBe(number);
        });
    });
    test("works with string", () => {
        const string = "Hello world";
        string.run(function() {
            expect(typeof this).toBe("string");
        });
        string.run(function() {
            expect(this).toBe(string);
        });
    });
    test("works with boolean", () => {
        const boolean = true;
        boolean.run(function() {
            expect(typeof this).toBe("boolean");
        });
        boolean.run(function() {
            expect(this).toBe(boolean);
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
        number.apply(function() {
            expect(this).toBe(number);
        });
    });
    test("works with string", () => {
        const string = "Hello world";
        string.apply(function() {
            expect(typeof this).toBe("string");
        });
        string.apply(function() {
            expect(this).toBe(string);
        });
    });
    test("works with boolean", () => {
        const boolean = true;
        boolean.apply(function() {
            expect(typeof this).toBe("boolean");
        });
        boolean.apply(function() {
            expect(this).toBe(boolean);
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

describe("takeIf", () => {
    test("works with object", () => {
        const obj = { name: "Daniel", age: 30 };
        obj.takeIf(it => !!expect(it).toBeInstanceOf(Object));
    });
    test("works with number", () => {
        const number = 5;
        number.takeIf(it => !!expect(typeof it).toBe("number"));
        number.takeIf(it => !!expect(it).toBe(number));
    });
    test("works with string", () => {
        const string = "Hello world";
        string.takeIf(it => !!expect(typeof it).toBe("string"));
        string.takeIf(it => !!expect(it).toBe(string));
    });
    test("works with boolean", () => {
        const boolean = true;
        boolean.takeIf(it => !!expect(typeof it).toBe("boolean"));
        boolean.takeIf(it => expect(it).toBe(boolean));
    });
    test("returns instance if true", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.takeIf(it => it.age < 40);
        expect(value).toBe(obj);
    });
    test("returns undefined if false", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.takeIf(it => it.age > 40);
        expect(value).toBeUndefined();
    });
    test("true without predicate", () => {
        const boolean = true;
        const value = boolean.takeIf();
        expect(value).toBe(boolean);
        expect(value).toBe(true);
    });
    test("false without predicate", () => {
        const boolean = false;
        const value = boolean.takeIf();
        expect(value).toBeUndefined();
    });
    test("modifies value", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.takeIf(it => {
            it.name = "George";
            return it.age < 40;
        });
        expect(value).toBe(obj);
        expect(value.name).toBe("George");
    });
    test("works with nullable", () => {
        const obj: object | null = { name: "Daniel", age: 30 };
        const value = obj?.takeIf(it => it["age"] < 40);
        expect(value).toBe(obj);
    });
    test("fails with null", () => {
        const obj: object | null = null;
        const value = obj?.takeIf(it => it["age"] < 40);
        expect(value).toBeUndefined();
    });
    test("fails with undefined", () => {
        const obj: object | undefined = undefined;
        const value = obj?.takeIf(it => it["age"] < 40);
        expect(value).toBeUndefined();
    });
});

describe("takeUnless", () => {
    test("works with object", () => {
        const obj = { name: "Daniel", age: 30 };
        obj.takeUnless(it => !!expect(it).toBeInstanceOf(Object));
    });
    test("works with number", () => {
        const number = 5;
        number.takeUnless(it => !!expect(typeof it).toBe("number"));
    });
    test("works with number", () => {
        const number = 5;
        number.takeUnless(it => !!expect(typeof it).toBe("number"));
        number.takeUnless(it => !!expect(it).toBe(number));
    });
    test("works with string", () => {
        const string = "Hello world";
        string.takeUnless(it => !!expect(typeof it).toBe("string"));
        string.takeUnless(it => !!expect(it).toBe(string));
    });
    test("works with boolean", () => {
        const boolean = true;
        boolean.takeUnless(it => !!expect(typeof it).toBe("boolean"));
        boolean.takeUnless(it => expect(it).toBe(boolean));
    });
    test("returns undefined if true", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.takeUnless(it => it.age < 40);
        expect(value).toBeUndefined();
    });
    test("returns instance if false", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.takeUnless(it => it.age > 40);
        expect(value).toBe(obj);
    });
    test("true without predicate", () => {
        const boolean = true;
        const value = boolean.takeUnless();
        expect(value).toBeUndefined();
    });
    test("false without predicate", () => {
        const boolean = false;
        const value = boolean.takeUnless();
        expect(value).toBe(boolean);
        expect(value).toBe(false);
    });
    test("modifies value", () => {
        const obj = { name: "Daniel", age: 30 };
        const value = obj.takeUnless(it => {
            it.name = "George";
            return it.age < 40;
        });
        expect(value).toBeUndefined();
        expect(obj.name).toBe("George");
    });
    test("works with nullable", () => {
        const obj: object | null = { name: "Daniel", age: 30 };
        const value = obj?.takeUnless(it => it["age"] > 40);
        expect(value).toBe(obj);
    });
    test("fails with null", () => {
        const obj: object | null = null;
        const value = obj?.takeUnless(it => it["age"] > 40);
        expect(value).toBeUndefined();
    });
    test("fails with undefined", () => {
        const obj: object | undefined = undefined;
        const value = obj?.takeUnless(it => it["age"] > 40);
        expect(value).toBeUndefined();
    });
});
