// data.js
// เก็บข้อมูล contacts และ categories เป็น JSON string

const phonebookData = {
  contacts: [
    {
      id: 1,
      name: 'นายสมชาย ใจดี',
      phone: '02-123-4567',
      category: 'ฝ่ายบริหาร',
      position: 'ผู้อำนวยการ',
      image: null // base64 หรือ url รูปภาพ
    },
    {
      id: 2,
      name: 'นางสาวสุดา รักงาน',
      phone: '081-234-5678',
      category: 'ฝ่ายการเงิน',
      position: 'หัวหน้าบัญชี',
      image: null
    },
    {
      id: 3,
      name: 'นายวิชัย เก่งมาก',
      phone: '089-345-6789',
      category: 'ฝ่ายเทคโนโลยี',
      position: 'โปรแกรมเมอร์',
      image: null
    },
    {
      id: 4,
      name: 'นางมาลี ขายเก่ง',
      phone: '092-456-7890',
      category: 'ฝ่ายการตลาด',
      position: 'นักการตลาด',
      image: null
    }
  ],
  categories: [
    'ฝ่ายบริหาร',
    'ฝ่ายการเงิน',
    'ฝ่ายบุคคล',
    'ฝ่ายเทคโนโลยี',
    'ฝ่ายการตลาด',
    'อื่นๆ'
  ]
};

// export เป็น JSON string
const phonebookJSONString = JSON.stringify(phonebookData);
