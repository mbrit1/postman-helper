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

// requested values are in an array
pm.test("requested value(s) are included",  () => {
    const values = pm.response.json().key;
    // key field should be an array
    pm.expect(key).to.be.an('array');
    // check if each value which was defined in an env variable is in the returned key
    pm.expect(pm.environment.get("someArray").some(r=> key.includes(r)));
});