ý kiến mang góc nhìn cá nhân, mong nhận được sự góp ý của người đọc:

+ sử dụng một state "form" cho toàn trang, mọi thao tác của user đều tương đương với setForm({...form, someProperty: someValue}), đối tượng form này sẽ lưu lại data trong quá trình user thao tác với UI.

+ giả sử dữ liệu trả về từ API đã qua xử lý nhẹ (có dạng như trong dataSource.js), dataSource sẽ được lưu trong sessionStorage, mục đích là để tránh dataSource này thay đổi trong khi truyền vào setState của react-hooks, khi dataSource này bị thay đổi dẫn đến việc không thể tìm lại được giá trị ban đầu khi cần thiết.

+ dự án chỉ sử dụng thư viện frontend cho datepicker, các component khác đều tự viết để chủ động trong việc xử lý style và behavior phức tạp.

+ Các component được sử dụng lại nhiều như Modal, Select, MuliSelect, Checkbox, Radio được viết theo kiểu module. Viết 1 lần và có thể sử dụng ở bất cứ vị trí nào, chỉ cần gán props cho nó.

+ gần như toàn bộ css viết bằng styled-components, mục đích để html dễ nhìn hơn, maintain style dễ hơn, xử lý linh hoạt các behavior của component nhờ props được gán cho component thay vì phải toggle các class để thay đổi style như cách cũ.

+ dự án được viết trên base React-boilerplate, tất cả mọi thứ như store, router, saga, eslint đã được cấu hình sẵn, chỉ việc code. Các thư viện trong package.json là các thư viện được install sẵn trong base này trừ fontawesome, styled-components, antd (cho datepicker)