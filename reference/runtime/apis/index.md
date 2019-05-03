# Standard APIs

The Workers Runtime provides the following standardized APIs for use by scripts running at the Edge.

Methods highlighted in orange are only implemented in the scope of a [request context](TODO: link to request context).

## JavaScript Standards

All of the [standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) supported by the current Google Chrome stable release are supported, with a few notable exceptions:

* `eval()` is not allowed for security reasons.
* `new Function` is not allowed for security reasons.
* `Date.now()` returns the time of the last I/O; it does not advance during code execution.

## Service Worker API

[FetchEvent](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent).

[Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

## Web Global APIs

The following methods are available per the [Worker Global Scope](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope):

* `atob()`
* `btoa()`
* `clearInterval()`
* `clearTimeout()`
* `setInterval()`
* `setTimeout()`

## Encoding API

Both TextEncoder and TextDecoder support UTF-8 encoding/decoding.

[Go to the docs](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API)

## URL API

The URL API supports urls conforming to http and https schemes.

[Go to the docs](https://developer.mozilla.org/en-US/docs/Web/API/URL)

## Fetch API

[Fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API) is implemented as expected within a Service Worker, with the exception of some features inapplicable to the edge, such as CORS-related properties.

* TODO: expand list of supported features

## Streams API

* [WritableStream]()
* [ReadableStream]()

An object implementing both WritableStream and ReadableStream can be instantiated using the zero-argument constructor [TransformStream()]()

## Web Crypto API

Cryptographically-secure random number generation
Digest (SHA family, MD5)
Sign and verify (HMAC (with SHA family, MD5), RSASSA-PKCS1-v1_5, ECDSA)
Encrypt and decrypt (AES-GCM, AES-CBC)
Key derivation (PBKDF2)
Key generation (AES-GCM, HMAC)
Raw key import/export for all of the above algorithms
