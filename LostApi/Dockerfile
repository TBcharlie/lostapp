# Use uma imagem base do .NET 8.0
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use uma imagem do SDK do .NET 8.0 para compilar o projeto
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["LostApi.csproj", "."]
RUN dotnet restore "LostApi.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "LostApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "LostApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LostApi.dll"]
