# Nhóm 13
## _XÂY DỰNG WEB CLIENT CHIA SẺ ĐỒ  CŨ_
Yêu cầu:
- Tham khảo chotot
- Tích hợp API tìm kiếm sản phẩm bằng hình ảnh

[![N|Solid](https://static.javatpoint.com/blog/images/mern-stack.png)](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.javatpoint.com%2Fmern-stack&psig=AOvVaw05nzkubx8WocrgAL-zml8J&ust=1670913758311000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjhiPm88_sCFQAAAAAdAAAAABAD)

Setup
---
Cài đặt environment variables cho file môi trường (.env)
| Variable name | Description |
| ------ | ------ |
| CLIENT_ID  | Google Oauth2 Client ID |
| CLIENT_SECRET | Google Oauth2 Client Secret|
| COOKIE_KEY_1 | Cookie key 1 for cookie session key |
| COOKIE_KEY_2 | Cookie key 2 for cookie session key |


Hướng dẫn cài đặt và chạy ứng dụng
---
Phía backend
```
B1: Go to directory: cd backend

B2: Cài đặt các thư viện bằng lệnh sau:
npm install --legacy-peer-deps

B3: Chạy tiếp lệnh npm install sau: 
npm install @tensorflow/tfjs-converter --legacy-peer-deps
Lưu ý: nếu thấy thông báo thư viện nào bị lỗi khi start thì phải chạy lệnn install chỉ định lên thư viện đó theo cú pháp
npm install tenthuvien --legacy-peer-deps

B4: Chạy backend sau khi hoàn thành install: npm start
Lưu ý: nếu thấy thông báo thư viện nào bị lỗi khi start thì phải chạy lệnn install chỉ định lên thư viện đó theo cú pháp
npm install tenthuvien --legacy-peer-deps
```
Phía Frontend
```
B1: Go to directory: cd frontend

B2: Cài đặt các thư viện bằng lệnh sau:
npm install --legacy-peer-deps

B3: Chạy frontend sau khi hoàn thành install: npm start
Lưu ý: nếu thấy thông báo thư viện nào bị lỗi khi start thì phải chạy lệnn install chỉ định lên thư viện đó theo cú pháp
npm install tenthuvien --legacy-peer-deps
```

## Giới thiệu về dự án
Dự án sử dụng các công nghệ: NodeJS, ExpressJS, MongoDb (Dùng với Mongoose), ReactJS,  jwt-authentication, jwt-authorization
Một số công cụ, thư viện được tích hợp như:
- TensorflowJS (Dùng cho vật nhận diện vật thể từ ảnh cho chức năng tìm kiếm sản phẩm bằng hình ảnh)
- EmailJS (Dùng cho việc gửi email xác thực)
- Redux Toolkit
- ...
Trang web được xây dựng hướng tới 2 đối tượng, đi kèm với các chức năng như sau:
- Guest
    + Đăng ký
    + Đăng nhập/ Đăng nhập bằng tài khoản Google
    + Xem danh sách sản phẩm, xem danh sách sản phẩm filter theo danh mục
    + Xem chi tiết sản phẩm
    + Thêm sản phẩm vào giỏ hàng
    + Tìm kiếm sản phẩm theo keyword
    + Tìm kiếm sản phẩm bằng hình ảnh
- Authorized Customer:
    + Đăng xuất
    + Xem danh sách sản phẩm, xem danh sách sản phẩm filter theo danh mục
    + Xem chi tiết sản phẩm
    + Thêm sản phẩm vào giỏ hàng
    + Tìm kiếm sản phẩm theo keyword
    + Tìm kiếm sản phẩm bằng hình ảnh
    + Tiến hành đặt hàng cho các sản phẩm trong giỏ hàng
    + Lưu trữ các tin đăng bán sản phẩm, xem danh sách sản phẩm đã lưu
    + Quản lý thông tin cá nhân
    + Quản lý đơn mua
    + Quản lý tin bán sản phẩm (Thêm, xoá, sửa tin đăng bán)
    + Quản lý đơn bán (Xem chi tiết, cập nhật đơn)
## Ràng buộc
- Để được đặt hàng cần phải tiến hành đăng nhập
- Để được lưu tin đăng bán của sản phẩm bất kỳ cần phải đăng nhập
- Để hoàn thành đăng nhập cần phải xác thực bằng email trước đó sau khi hoàn thành đăng ký




