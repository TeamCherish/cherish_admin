export interface User {
    id: number;
    image?: string;
    name: string;
    email: string;
    phoneNum: string;
    contactCount: string;
}

export interface Plant {
    id: number;
    name: string;
    period: number;
    recentDate: string;
    accumulated: number;
}

export const USER_LIST: User[] = [
    {id: 1, name: "01짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 2, name: "02짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 3, name: "03짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 4, name: "04짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 5, name: "05짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 6, name: "06짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 7, name: "07짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 8, name: "08짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 9, name: "09짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 10, name: "10짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 11, name: "11짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 12, name: "12짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 13, name: "13짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 14, name: "14짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 15, name: "15짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 16, name: "16짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 17, name: "17짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 18, name: "18짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 19, name: "19짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
    {id: 20, name: "20짱구엄마", email: "temp@temp.com", phoneNum: "0000", contactCount: "00"},
];

export const PLANT_LIST: Plant[] = [
    {id: 1, name: "령이", period: 3, recentDate: "2021-08-31", accumulated: 8},
    {id: 2, name: "쭈", period: 15, recentDate: "2021-12-31", accumulated: 2},
    {id: 3, name: "쭈쌈", period: 10, recentDate: "2021-11-30", accumulated: 5},
]