import Onboard1 from "../../assets/images/Onboard1.png";
import Onboard2 from "../../assets/images/Onboard2.png";
import Onboard3 from "../../assets/images/Onboard3.png";

import Google from "../../assets/images/Google.svg";
import Apple from "../../assets/images/Apple.svg";
import Dark_Apple from "../../assets/images/Dark_Apple.svg";

import Cate1 from "../../assets/images/cate1.svg";
import Cate2 from "../../assets/images/cate2.svg";
import Cate3 from "../../assets/images/cate3.svg";
import Cate4 from "../../assets/images/cate4.svg";
import Cate5 from "../../assets/images/cate5.svg";
import Cate6 from "../../assets/images/cate6.svg";
import Cate7 from "../../assets/images/cate7.svg";
import Cate8 from "../../assets/images/cate8.svg";
import Cate9 from "../../assets/images/cate9.svg";

import Money1 from "../../assets/images/Send_money1.png";
import Money2 from "../../assets/images/Send_money2.png";
import Money3 from "../../assets/images/Send_money3.png";
import Money4 from "../../assets/images/Send_money4.png";
import Money5 from "../../assets/images/Send_money5.png";

import PhonePay from "../../assets/images/phone_pay.svg";
import Paypal from "../../assets/images/paypal.svg";

import Card1 from "../../assets/images/Card1.png";
import Card2 from "../../assets/images/Card2.png";
import Card3 from "../../assets/images/Card3.png";

export const pages = [
    {
        id: 1,
        image: Onboard1,
        heading: 'Welcome to BGFinancz!',    
        text: "Your journey to smarter banking starts here. Explore powerful tools and features designed for you.",
    },
    {
        id: 2,
        image: Onboard2,
        heading: '24/7 Customer Service',
        text: "We're here to help, anytime, anywhere. Reach us via chat, email, or phone.",
    },
    {
        id: 3,
        image: Onboard3,
        heading: 'Track Your Spending',
        text: "Get real-time insights and manage your budget effortlessly. Stay on top of your finances with ease.",
    },
];

export const log_methods = [
    {
        id: 1,
        image: <Google />, 
        dark_image: <Google />,
        text: 'Sign Up with Google',
    },
    {
        id: 2,
        image: <Apple />, 
        dark_image: <Dark_Apple />,
        text: 'Sign Up with Apple',
    },
]


export const categories = [
    {
        id: 1,
        icon: <Cate1 />,
        names: 'Account and Card',
    },
    {
        id: 2,
        icon: <Cate2 />,
        names: 'Transfer',
    },
    {
        id: 3,
        icon: <Cate3 />,
        names: 'Withdraw',
    },
    {
        id: 4,
        icon: <Cate4 />,
        names: 'Mobile prepaid',
    },
    {
        id: 5,
        icon: <Cate5 />,
        names: 'Pay the bill',
    },
    {
        id: 6,
        icon: <Cate6 />,
        names: 'Save online',
    },
    {
        id: 7,
        icon: <Cate7 />,
        names: 'Credit card',
    },
    {
        id: 8,
        icon: <Cate8 />,
        names: 'Transaction report',
    },
    {
        id: 9,
        icon: <Cate9 />,
        names: 'Beneficiary',
    },
]

export const send_money = [
    {
        id: 1,
        image: Money1,
        name: 'Minato',
    },
    {
        id: 2,
        image: Money2,
        name: 'Minato',
    },
    {
        id: 3,
        image: Money3,
        name: 'Minato',
    },
    {
        id: 4,
        image: Money4,
        name: 'Minato',
    },
    {
        id: 5,
        image: Money5,
        name: 'Minato',
    },
]

export const last_transaction = [
    {
        id: 1,
        image: <PhonePay />,
        heading: 'Debited in Phonepay',
        date: '03 October | 5:30 AM',
        amount: '-$500',
    },
    {
        id: 2,
        image: <Paypal />,
        heading: 'Credited in Paypal',
        date: '03 October | 5:30 AM',
        amount: '+$500',
    }
]

export const swipper_data = [
    {
        id: 1,
        image: Card1,
        name: 'Satoru Gojo',
        type: 'Amazon Platinium',
        card_no: '4756 .... .... 9018',
        expire: '11/24',
        balance: '$3.469.52',
    },
    {
        id: 2,
        image: Card2,
        name: 'Satoru Gojo',
        type: 'Amazon Platinium',
        card_no: '4756 .... .... 9018',
        expire: '11/24',
        balance: '$3.469.52',
    },
    {
        id: 3,
        image: Card3,
        name: 'Satoru Gojo',
        type: 'Amazon Platinium',
        card_no: '4756 .... .... 9018',
        expire: '11/24',
        balance: '$3.469.52',
    },
]