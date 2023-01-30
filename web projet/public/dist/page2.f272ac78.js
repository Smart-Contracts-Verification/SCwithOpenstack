/******************************************************************************************************************* */ /******************************************* Authentication VIA TOKEN ***************************************************************** */ const url = "http://172.16.252.23/identity/v3/auth/tokens?nocatalog";
const data1 = {
    "auth": {
        "identity": {
            "methods": [
                "password"
            ],
            "password": {
                "user": {
                    "domain": {
                        "name": "Default"
                    },
                    "name": "admin",
                    "password": "devstack"
                }
            }
        },
        "scope": {
            "project": {
                "domain": {
                    "name": "Default"
                },
                "name": "admin"
            }
        }
    }
};
async function token_POST(uri, data) {
    const resp = await fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const json = await resp.json();
    const a = resp.headers.get("x-subject-token");
    return a;
}
token_POST(url, data1).then((res)=>console.log(res));

//# sourceMappingURL=page2.f272ac78.js.map
