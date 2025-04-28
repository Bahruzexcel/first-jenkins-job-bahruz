import{test} from "@playwright/test";

test.describe("Group intro", () => {
    test.beforeAll(async () => {
        console.log("Before all tests");
    });

    test.beforeEach(async () => {
        console.log("Before each test");
    });

    test("Test 1", async ({ page }) => {
        console.log("Test 1");
    });

    test("Test 2", async ({ page }) => {
        console.log("Test 2");
    });
    test("Test 3", async ({ page }) => {
        console.log("Test 3");
    });

    test.afterEach(async () => {
        console.log("After each test");
    });

    test.afterAll(async () => {
        console.log("After all tests");
    });
});