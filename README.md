# Electron com AutoUpdater na S3 
Aplicação Electron simples para testar o AutoUpdater 

#### Credenciais da AWS
Deve ser criado na AWS um usuário com o tipo de credenciais "Access key - Programmatic access"

Após criar o usuário e conceder acesso à S3 e ao bucket, as credenciais devem ser adicionadas como variáveis de ambiente na máquina de build da aplicação.
```AWS_ACCESS_KEY_ID```
```AWS_SECRET_ACCESS_KEY```


#### Build
Para Buildar:
```npm run build```
#### Publicação para a S3
Para publicar na S3:
```npm run publish```








