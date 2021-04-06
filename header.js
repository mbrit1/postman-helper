// content type in header is json
pm.test("content type in header is json", () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
})