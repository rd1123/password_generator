# password generator
依照設定密碼長度、規則、剔除字，隨機生成密碼

## 功能
+ 可以設定自動生成密碼的長度
+ 可勾選密碼出現字(ex:大寫英文、小寫英文...)
+ 可輸入不想顯示字

## 相關安裝
1. 開啟terminal(終端機)，開啟執行目錄：
```
git clone https//github.com/rd1123/password_generator.git
```
2. 移動至目錄password_generator 
```
cd path/password_generator
```
3. 使用npm安裝相關套件
```
npm install
```
4. 輸入指令啟動本機伺服器
```
npm run dev
```
出現
```
Server is started on http://localhost:3000
```
即成功，並可至http://localhost:3000操作結果

## 預覽畫面
### 首頁
![index](https://github.com/rd1123/password_generator/blob/master/pic/index.jpg)

# 使用工具
+ [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) -開發code環境
+ [Express](https://www.npmjs.com/package/express) -應用程式架構
+ [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) -使用模板引擎