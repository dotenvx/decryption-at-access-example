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

3. Visit [localhost:3000/leakylog](http://localhost:3000)

You will not see `HELLO` in the leaky env logs - demonstrating that dotenvx supports "Decryption-at-Access" avoiding the [leaky log issue](https://youtu.be/j3QJRdiTr1I?t=696).

P.S. A system/framework should also be configured to not leak env to logs ideally. Most good frameworks support this out of the box. But nonetheless, if you use decryption-at-access with dotenvx `get` you will be protected.
