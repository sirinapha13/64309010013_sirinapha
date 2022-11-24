let employee = {
    "em":[{
    "ID": 10001,
    "NAME": "นางสาวชนิสา ไกรรอด",
    "department": "ไอที",
    "department": "System Engineer",
    "salary": 42000,
    "Bonus rating level": "S"
}, {
    "ID": 10002,
    "NAME": "นายวศพล สิริอนันต",
    "department": "ไอที",
    "department": "System Engineer",
    "salary": 13000,
    "Bonus rating level": "A"

}, {
    "ID": 10003,
    "NAME": "นางจิราพร อินทรประเสริฐ",
    "department": "ฝ่ายบุคคล",
    "department": "HR",
    "salary": 9000,
    "Bonus rating level": "C"
}, {
    "ID": 10004,
    "NAME": "นางสาวพิมพา กาญจนมาศ",
    "department": "ฝ่ายบุคคล",
    "department": "HR",
    "salary": 21000,
    "Bonus rating level": "B"
}, {
    "ID": 10005,
    "NAME": "นายจิรโชติ วัฒนโกศล",
    "department": "ฝ่ายบุคคล",
    "department": "HR",
    "salary": 22000,
    "Bonus rating level": "A"
}, {
    "ID": 10006,
    "NAME": "นายธัชพล ขจรเกียรติสกุล",
    "department": "การเงิน",
    "department": "Account",
    "salary": 12000,
    "Bonus rating level": "S"
}, {
    "ID": 10007,
    "NAME": "นายธนวิทย์ สุวรรณโชติ",
    "department": "การเงิน",
    "department": "Account",
    "salary": 14000,
    "Bonus rating level": "A"
}, {
    "ID": 10008,
    "NAME": "นางพัชรียา สําราญทรัพย์",
    "department": "การเงิน",
    "department": "Account",
    "salary": 50000,
    "Bonus rating level": "C"
}, {
    "ID": 10009,
    "NAME": "นางสาวขวัญชนก ธาดาวรวงศ์",
    "department": "ไอที",
    "department": "System Engineer",
    "salary": 16000,
    "Bonus rating level": "A"
}]
}
let bonus={"ddrank" : [{
    "level": "S",
    "egobonus": 1.4
}, {
    "level": "A",
    "egobonus": 1.2
}, {
    "level": "B",
    "egobonus": 1.0
}, {
    "level": "C",
    "egobonus": 0.8
}]}
console.log(employee.em[2].ID)

