// 200
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});