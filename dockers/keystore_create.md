## HTTPS support

To enable SSL, generate a certificate using:
```
keytool -genkey -alias <your-application> -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 3650
```

Then, modify the server.ssl properties so your application-prod.yml configuration looks like:
```
server:
    port: 443
    ssl:
        key-store: keystore.p12
        key-store-password: <your-password>
        keyStoreType: PKCS12
        keyAlias: <your-application>
```