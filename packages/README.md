# kAuth - Packages

kAuth is managed as a "monorepo" of all packages which are then composed as needed by the developer.
Yarn's `workspaces` feature is leveraged to provide this functionality.

The below details all packages that make up kAuth, what type of package they are, as well as their purpose. Categories are defined as follows:
* **core**: provides some fundamental logic that is required for a large number of other kAuth packages.
* **flow**: implements the logic required for some authentication process.
* **strategy**: allows some service or other entity to be used for authentication.
* **storage**: allows kAuth to be integrated with some storage system for the purpose of authentication.
* **page**: provides a front-end interface for some purpose of the authentication process.
* **component**: front-end components, tools, and utilities that can be used to add more functionality to the user facing portion of authentication.

| Package                                                                            | Category    | Purpose |
| ---------------------------------------------------------------------------------- | ----------- | ------- |
| [`kauth-core`](https://github.com/EvilKanoa/kAuth/tree/master/packages/kauth-core) | `core`      | Required for the use of kAuth. Manages all other kAuth packages and implements the fundamental flows required for kAuth. |
| [`kauth-flow-forgot`]()                                                            | `flow`      | |
| [`kauth-flow-2fa`]()                                                               | `flow`      | |
| [`kauth-strategy-username`]()                                                      | `strategy`  | |
| [`kauth-strategy-google`]()                                                        | `strategy`  | |
| [`kauth-strategy-facebook`]()                                                      | `strategy`  | |
| [`kauth-strategy-github`]()                                                        | `strategy`  | |
| [`kauth-strategy-custom`]()                                                        | `strategy`  | |
| [`kauth-storage-memory`]()                                                         | `storage`   | |
| [`kauth-storage-postgres`]()                                                       | `storage`   | |
| [`kauth-storage-mongo`]()                                                          | `storage`   | |
| [`kauth-storage-custom`]()                                                         | `storage`   | |
| [`kauth-page-bootstrap-login`]()                                                   | `page`      | |
| [`kauth-page-bootstrap-register`]()                                                | `page`      | |
| [`kauth-component-react-hooks`]()                                                  | `component` | |
