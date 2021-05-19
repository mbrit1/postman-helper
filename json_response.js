// the response should be a json
pm.test("response should be okay to process", () => {
    pm.response.to.have.jsonBody();
    pm.response.to.not.have.jsonBody("error");
});

// check the issuer. It should match with the base path
pm.test("the issuer should equal the base path", () => {
    pm.expect(pm.response.json().issuer).to.eql(pm.environment.get("BasePath"));
});

// content should contains some keys
pm.test("json contains key", () => {
    pm.expect(pm.response.json()).to.have.property("key");
});
/// or
pm.test("key is included", () => {
    pm.expect(pm.response.json().key).to.not.be.undefined;
});

// key is an array
pm.test("key is an array", () => {
    pm.expect(pm.response.json().value).to.be.an("array");
});