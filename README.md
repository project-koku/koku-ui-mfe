# Koku microfrontend (MFE) with Module Federation

[![AGPLv3][license-badge]][license]
[![Build Status][build-badge]][build]

React.js app for Cost Management.

User interface is based on Patternfly [![Patternfly][pf-logo]][patternfly]

To submit an issue, please visit https://issues.redhat.com/projects/COST/

## Requirements
* [NodeJS v18.15+][nodejs]
* [npm v9.5+][npm]

## Setup /etc/hosts entries (do this once)

Edit the /etc/hosts file and add the following entries
```
127.0.0.1 prod.foo.redhat.com
127.0.0.1 stage.foo.redhat.com
```

Alternatively, run the [patch-etc-hosts.sh][patch-etc-hosts] script from the insights-proxy repo
```
sudo bash scripts/patch-etc-hosts.sh
```

## Getting Started
1. Install requirements listed above.
2. Setup /etc/hosts entries listed above. 
3. Clone the repository, and open a terminal in the base of this project.
4. Run the command `npm install` to install all the dependencies.

## Building
```
npm build
```

## Testing
```
npm test
```

## Running Koku MFE against a hosted Koku API, using webpack proxy
Note that this approach currently supports the Insights stage-beta, stage-stable, prod-beta, and prod-stable environments.

1. Start development server
```
npm start
```

Follow the prompts that follow.

* Do you want to use local api? `no`
* Which platform environment you want to use `stage`
* Which Chrome environment you want to use? `beta`

2. Open the following URL
```
https://stage.foo.redhat.com:1337/beta/staging/cost-management
```

### Running Koku MFE with local Cloud Services Backend

See https://github.com/RedHatInsights/chrome-service-backend/blob/main/docs/cloud-services-config.md#serving-files-locally

1. Serve files locally from Cloud Services Backend repo
```
make dev-static-node
```

2. Start development server in Koku MFE repo
```
npm start:csb
```

### Running Koku MFE with local Koku UI

See https://github.com/project-koku/koku-ui

1. Start development server in Koku MFE repo
```
npm start:static
```

2. Start development server in Koku UI repo
```
npm start:mfe
```

### Running Koku MFE with local Koku UI and Cloud Services Backend

See https://github.com/RedHatInsights/chrome-service-backend/blob/main/docs/cloud-services-config.md#serving-files-locally
and https://github.com/project-koku/koku-ui

1. Serve files locally from Cloud Services Backend repo
```
make dev-static-node
```

2. Start development server in Koku MFE repo
```
npm start:static
```

3. Start development server in Koku UI repo
```
npm start:csb:mfe
```

## Releasing Koku MFE

This [RELEASE][release-doc] doc describes how to release Koku MFE to each staging environment.

[koku-readme]: https://github.com/project-koku/koku#readme
[license-badge]: https://img.shields.io/github/license/project-koku/koku-ui-mfe.svg?longCache=true&style=for-the-badge
[license]: https://github.com/project-koku/koku-ui-mfe/blob/main/LICENSE
[nodejs]: https://nodejs.org/en/
[patch-etc-hosts]: https://github.com/RedHatInsights/insights-proxy/blob/master/scripts/patch-etc-hosts.sh
[pf-logo]: https://www.patternfly.org/v4/images/logo.4189e7eb1a0741ea2b3b51b80d33c4cb.svg
[patternfly]: https://www.patternfly.org/
[release-doc]: https://github.com/project-koku/koku-ui-mfe/blob/main/RELEASE.md
[npm]: https://https://www.npmjs.com/
