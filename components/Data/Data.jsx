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