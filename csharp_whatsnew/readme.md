* React template, authentication with Sqlite:
```
dotnet new react -o [some_folder] -au Individual
```

* React template, authentication with Sql Server local db:
```
dotnet new react --auth Individual -uld -o [some_folder]
```

* Install EF tools:
```
dotnet tool install --global dotnet-ef
```
* Modify `appsettings.json` change `DefaultConnection` to:
```
"data source=mssql.local;initial catalog=SPA;integrated security=false;User ID=sa;Password=someP@ssword;MultipleActiveResultSets=True;App=EntityFramework&quot;"
```

* Update database - Create identity schema: 
```
dotnet ef database update
```
 
* Useful `dotnet` commands:
```
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet remove package Microsoft.EntityFrameworkCore.SqlServer
```

* In `spa_react` project, `EmployeeContext` is database first, `HRConext` is code first. Some commands here
    * Generate migration code: 
        ```
        dotnet ef migrations add InitialCreate  -c HRContext
        ```
    * Update database with context only: 
        ```
        dotnet ef database update -Context HRContext
        ```

* blazor server + auth + sql server
```
dotnet new blazorserver --auth Individual -uld -o matblazor-server
```
