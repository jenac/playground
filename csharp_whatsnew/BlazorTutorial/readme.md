```
dotnet ef migrations add "Init"
dotnet ef database update

dotnet add package ElectronNET.API --version 5.30.1
dotnet tool install --global ElectronNET.CLI
electronize init

electronize build /target win
electronize build /target osx
electronize build /target linux
```

