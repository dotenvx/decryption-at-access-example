> [!IMPORTANT]
>
> This repo is for purposes of demonstrating "Decryption at Access" as discussed in our [whitepaper](https://dotenvx.com/dotenvx.pdf)
>
> decryption-at-access-example

## Usage

1. Run the app.

```
$ docker build -t daa-app . && docker run --rm -p 3000:3000 --name daa-container daa-app
```

2. Visit [localhost:3000](http://localhost:3000) a couple times or so.

3. Run `docker inspect` to make sure env has NOT been set.

```
$ docker inspect daa-container
```

If you do not see `HELLO` then decryption at access is successfully working.
