# Chkk Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/chkk)](https://www.npmjs.com/package/@fern-api/chkk)

The Chkk Node.js library provides access to the Chkk API from JavaScript/TypeScript.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-hmh6ob?file=app.ts)

```typescript
import { ChkkClient, ChkkEnvironment } from '@fern-api/chkk';

void main();

async function main() {
  const client = new ChkkClient({
    environment: ChkkEnvironment.Production,
    apiKey: 'CHKK_API_KEY',
  });

  const response = await client.identity.updateOrganization('orgSlug', {
    name: 'New Organization Name',
    logoUrl: 'https://example.com/logo.png',
    address: '123 Main St.',
    website: 'https://example.com',
  });

  console.log('Received response from Chkk!', response);
}

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
